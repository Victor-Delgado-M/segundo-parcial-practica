"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const InversionistaModel_1 = __importDefault(require("./models/InversionistaModel")); // Asegúrate de importar correctamente tu modelo
// Conectarse a la base de datos MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/Practica2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Crear un nuevo inversionista
const nuevoInversionista = new InversionistaModel_1.default({
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    // Otros campos según el esquema
});
// Guardar el nuevo inversionista en la base de datos
nuevoInversionista.save()
    .then(() => {
    console.log('Inversionista creado correctamente');
})
    .catch((error) => {
    console.error('Error al crear el inversionista:', error);
});
