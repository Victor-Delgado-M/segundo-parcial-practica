# Servidor WebSocket con Node.js y Express

Este es un servidor WebSocket básico implementado en Node.js utilizando Express para servir archivos estáticos y WebSocket para la comunicación en tiempo real.

## Requisitos

- Node.js instalado en tu máquina.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd nombre-del-repositorio
2. Correr programa
  node server.js
## POSTMAN
Abre Postman.
Crea una nueva solicitud WebSocket: ws://localhost:3000?userId="Definir el usuario o saldra error la conectar"
Haz clic en "Connect".
Todos son en formato Json

Para agregar un Concepto de Inversión:

{
  "type": "addConceptoDeInversion",
  "data": {
    "nombre": "Nuevo Concepto",
    "descripcion": "Descripción del nuevo concepto"
  }
}
Para agregar un Inversionista:

{
  "type": "addInversionista",
  "data": {
    "nombre": "Juan",
    "apellido": "Pérez"
  }
}
Para agregar una Inversión:

{
  "type": "addInversion",
  "data": {
    "conceptoDeInversionId": 1,
    "monto": 1000,
    "fecha": "2024-07-05"
  }
}
Para obtener Conceptos de Inversión:

{
  "type": "getConceptosDeInversion"
}
Para obtener Inversionistas:

{
  "type": "getInversionistas"
}
Para obtener Inversiones:

{
  "type": "getInversiones"
}