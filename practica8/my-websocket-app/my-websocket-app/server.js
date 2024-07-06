const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Configurar la base de datos SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos SQLite');
    // Crear tablas si no existen
    db.run(`CREATE TABLE IF NOT EXISTS conceptos_de_inversion (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, descripcion TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS inversionistas (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, apellido TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS inversiones (id INTEGER PRIMARY KEY AUTOINCREMENT, concepto_de_inversion_id INTEGER, monto REAL, fecha TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS transacciones (id INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT, monto REAL, fecha TEXT)`);
  }
});

// Mapa para rastrear las conexiones por usuario
const userConnections = new Map();

// Servir archivos estáticos (index.html)
app.use(express.static(path.join(__dirname)));

// WebSocket
wss.on('connection', function connection(ws, req) {
  const params = new URLSearchParams(req.url.replace('/?', ''));
  const userId = params.get('userId');

  if (!userId) {
    ws.send(JSON.stringify({ type: 'error', message: 'User ID is required' }));
    ws.close();
    return;
  }

  const connections = userConnections.get(userId) || [];
  
  if (connections.length >= 3) {
    ws.send(JSON.stringify({ type: 'error', message: 'Maximum connections reached' }));
    ws.close();
    return;
  }

  // Agregar la nueva conexión al mapa
  connections.push(ws);
  userConnections.set(userId, connections);

  console.log(`Cliente conectado al WebSocket: ${userId}`);

  ws.on('message', function incoming(message) {
    try {
      const parsedMessage = JSON.parse(message);
      console.log(`Mensaje recibido desde el cliente (${userId}): ${JSON.stringify(parsedMessage)}`);

      if (parsedMessage.type === 'addConceptoDeInversion') {
        const conceptoDeInversion = parsedMessage.data;
        db.run(
          `INSERT INTO conceptos_de_inversion (nombre, descripcion) VALUES (?, ?)`,
          [conceptoDeInversion.nombre, conceptoDeInversion.descripcion],
          function (err) {
            if (err) {
              console.error('Error al agregar concepto de inversión:', err);
              ws.send(JSON.stringify({ type: 'error', message: 'Error al agregar concepto de inversión' }));
            } else {
              console.log('Concepto de inversión agregado con éxito');
              ws.send(JSON.stringify({ type: 'conceptoDeInversionAgregado', data: { id: this.lastID, ...conceptoDeInversion } }));
            }
          }
        );
      } else if (parsedMessage.type === 'addInversionista') {
        const inversionista = parsedMessage.data;
        db.run(
          `INSERT INTO inversionistas (nombre, apellido) VALUES (?, ?)`,
          [inversionista.nombre, inversionista.apellido],
          function (err) {
            if (err) {
              console.error('Error al agregar inversionista:', err);
              ws.send(JSON.stringify({ type: 'error', message: 'Error al agregar inversionista' }));
            } else {
              console.log('Inversionista agregado con éxito');
              ws.send(JSON.stringify({ type: 'inversionistaAgregado', data: { id: this.lastID, ...inversionista } }));
            }
          }
        );
      } else if (parsedMessage.type === 'addInversion') {
        const inversion = parsedMessage.data;
        db.run(
          `INSERT INTO inversiones (concepto_de_inversion_id, monto, fecha) VALUES (?, ?, ?)`,
          [inversion.conceptoDeInversionId, inversion.monto, inversion.fecha],
          function (err) {
            if (err) {
              console.error('Error al agregar inversión:', err);
              ws.send(JSON.stringify({ type: 'error', message: 'Error al agregar inversión' }));
            } else {
              console.log('Inversión agregada con éxito');
              ws.send(JSON.stringify({ type: 'inversionAgregada', data: { id: this.lastID, ...inversion } }));
            }
          }
        );
      } else if (parsedMessage.type === 'getConceptosDeInversion') {
        db.all(`SELECT * FROM conceptos_de_inversion`, (err, rows) => {
          if (err) {
            console.error('Error al consultar conceptos de inversión:', err);
            ws.send(JSON.stringify({ type: 'error', message: 'Error al consultar conceptos de inversión' }));
          } else {
            ws.send(JSON.stringify({ type: 'conceptosDeInversion', data: rows }));
          }
        });
      } else if (parsedMessage.type === 'getInversionistas') {
        db.all(`SELECT * FROM inversionistas`, (err, rows) => {
          if (err) {
            console.error('Error al consultar inversionistas:', err);
            ws.send(JSON.stringify({ type: 'error', message: 'Error al consultar inversionistas' }));
          } else {
            ws.send(JSON.stringify({ type: 'inversionistas', data: rows }));
          }
        });
      } else if (parsedMessage.type === 'getInversiones') {
        db.all(`SELECT * FROM inversiones`, (err, rows) => {
          if (err) {
            console.error('Error al consultar inversiones:', err);
            ws.send(JSON.stringify({ type: 'error', message: 'Error al consultar inversiones' }));
          } else {
            ws.send(JSON.stringify({ type: 'inversiones', data: rows }));
          }
        });
      } else if (parsedMessage.type === 'agregar-transaccion') {
        const transaccion = parsedMessage.data;
        db.run(
          `INSERT INTO transacciones (tipo, monto, fecha) VALUES (?, ?, ?)`,
          [transaccion.tipo, transaccion.monto, transaccion.fecha],
          function (err) {
            if (err) {
              console.error('Error al agregar transacción:', err);
              ws.send(JSON.stringify({ type: 'error', message: 'Error al agregar transacción' }));
            } else {
              console.log('Transacción agregada con éxito');
              const transaccionConId = { id: this.lastID, ...transaccion };
              wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                  client.send(JSON.stringify({ type: 'transaccionAgregada', data: transaccionConId }));
                }
              });
            }
          }
        );
      } else if (parsedMessage.type === 'consultar-activos') {
        db.all(`SELECT * FROM transacciones`, (err, rows) => {
          if (err) {
            console.error('Error al consultar transacciones:', err);
            ws.send(JSON.stringify({ type: 'error', message: 'Error al consultar transacciones' }));
          } else {
            ws.send(JSON.stringify({ type: 'transaccionesActivas', data: rows }));
          }
        });
      } else {
        console.log('Tipo de mensaje no reconocido:', parsedMessage.type);
      }
    } catch (error) {
      console.error('Error al procesar el mensaje:', error);
      ws.send(JSON.stringify({ type: 'error', message: 'Error al procesar el mensaje' }));
    }
  });

  ws.on('close', function() {
    console.log(`Cliente desconectado del WebSocket: ${userId}`);
    const userConnections = userConnections.get(userId) || [];
    const index = userConnections.indexOf(ws);
    if (index !== -1) {
      userConnections.splice(index, 1);
    }
    if (userConnections.length === 0) {
      userConnections.delete(userId);
    } else {
      userConnections.set(userId, userConnections);
    }
  });
});

server.listen(3000, function listening() {
  console.log('WebSocket server escuchando en el puerto 3000');
});
