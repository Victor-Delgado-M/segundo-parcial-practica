## Descripción
Practica 6

## Instalación
Pasos para instalar y configurar tu proyecto.

## Uso
Instrucciones sobre cómo usar y ejecutar tu proyecto.

## Capturas de Pantalla
![Captura de Pantalla 1](ruta/a/tu/captura1.png)
![Captura de Pantalla 2](ruta/a/tu/captura2.png)

## Rutas y Funcionamiento

### Inversiones

#### Obtener todas las inversiones
- Ruta: GET /inversiones
- Función: Obtiene todas las inversiones registradas en la base de datos.

#### Obtener una inversión por ID
- Ruta: GET /inversiones/:id
- Función: Obtiene una inversión específica por su ID.

#### Agregar una nueva inversión

- Ruta: POST /inversiones
- Cuerpo de la solicitud:
```json
{
 "idInversionista": 1,
 "idConceptoInversion": 1,
 "valorInversion": 5000,
 "fecha": "2024-06-21",
 "duracionInversion": 30
}
Función: Agrega una nueva inversión con los datos proporcionados.

#### Actualizar una inversión existente

Ruta: PUT /inversiones/
Cuerpo de la solicitud:
json
Copiar código
{
  "valorInversion": 5500
}
Función: Actualiza la información de una inversión existente.

#### Eliminar una inversión
Ruta: DELETE /inversiones/
Función: Elimina una inversión de la base de datos.

#### Inversionistas
Obtener todos los inversionistas
Ruta: GET /inversionistas
Función: Obtiene todos los inversionistas registrados en la base de datos.

#### Obtener un inversionista por ID
Ruta: GET /inversionistas/
Función: Obtiene un inversionista específico por su ID.

#### Agregar un nuevo inversionista
Ruta: POST /inversionistas
Cuerpo de la solicitud:
json
Copiar código
{
  "nombre": "Juan Pérez",
  "identificacion": "123456789"
}
#### Función: Agrega un nuevo inversionista con los datos proporcionados.
Actualizar un inversionista existente
Ruta: PUT /inversionistas/
Cuerpo de la solicitud:
json
Copiar código
{
  "nombre": "Juan Pérez Gómez"
}
Función: Actualiza la información de un inversionista existente.

#### Eliminar un inversionista
Ruta: DELETE /inversionistas/
Función: Elimina un inversionista de la base de datos.

#### Conceptos de Inversión
Obtener todos los conceptos de inversión
Ruta: GET /conceptos-inversion
Función: Obtiene todos los conceptos de inversión registrados en la base de datos.

#### Obtener un concepto de inversión por ID
Ruta: GET /conceptos-inversion/
Función: Obtiene un concepto de inversión específico por su ID.

#### Agregar un nuevo concepto de inversión
Ruta: POST /conceptos-inversion
Cuerpo de la solicitud:
json
Copiar código
{
  "concepto": "Inversión a plazo fijo",
  "detalle": "Inversión con una tasa de interés del 5% anual, plazo de 12 meses."
}
Función: Agrega un nuevo concepto de inversión con los datos proporcionados.

#### Actualizar un concepto de inversión existente
Ruta: PUT /conceptos-inversion/
Cuerpo de la solicitud:
json
Copiar código
{
  "detalle": "Inversión con una tasa de interés del 6% anual, plazo de 12 meses."
}
Función: Actualiza la información de un concepto de inversión existente.

#### Eliminar un concepto de inversión
Ruta: DELETE /conceptos-inversion/
Función: Elimina un concepto de inversión de la base de datos.


