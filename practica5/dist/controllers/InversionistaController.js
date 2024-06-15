"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInversionista = exports.updateInversionista = exports.createInversionista = exports.getInversionistaById = exports.getInversionistas = void 0;
const Inversionista_1 = __importDefault(require("../models/Inversionista"));
// Obtener todos los inversionistas
const getInversionistas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inversionistas = yield Inversionista_1.default.find();
        res.json(inversionistas);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los inversionistas' });
    }
});
exports.getInversionistas = getInversionistas;
// Obtener un inversionista por su ID
const getInversionistaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inversionista = yield Inversionista_1.default.findById(req.params.id);
        if (!inversionista) {
            return res.status(404).json({ error: 'Inversionista no encontrado' });
        }
        res.json(inversionista);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el inversionista' });
    }
});
exports.getInversionistaById = getInversionistaById;
// Crear un nuevo inversionista
const createInversionista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoInversionista = new Inversionista_1.default(req.body);
        const inversionistaGuardado = yield nuevoInversionista.save();
        res.status(201).json(inversionistaGuardado);
    }
    catch (error) {
        res.status(400).json({ error: 'Error al crear el inversionista' });
    }
});
exports.createInversionista = createInversionista;
// Actualizar un inversionista por su ID
const updateInversionista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inversionistaActualizado = yield Inversionista_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!inversionistaActualizado) {
            return res.status(404).json({ error: 'Inversionista no encontrado' });
        }
        res.json(inversionistaActualizado);
    }
    catch (error) {
        res.status(400).json({ error: 'Error al actualizar el inversionista' });
    }
});
exports.updateInversionista = updateInversionista;
// Eliminar un inversionista por su ID
const deleteInversionista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inversionistaEliminado = yield Inversionista_1.default.findByIdAndDelete(req.params.id);
        if (!inversionistaEliminado) {
            return res.status(404).json({ error: 'Inversionista no encontrado' });
        }
        res.json({ message: 'Inversionista eliminado correctamente' });
    }
    catch (error) {
        res.status(400).json({ error: 'Error al eliminar el inversionista' });
    }
});
exports.deleteInversionista = deleteInversionista;
