"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const inversionRealizadaSchema = new mongoose_1.default.Schema({
    inversionistaId: { type: mongoose_1.default.Types.ObjectId, required: true, ref: 'Inversionista' },
    conceptoInversionId: { type: mongoose_1.default.Types.ObjectId, required: true, ref: 'ConceptoInversion' },
    monto: { type: Number, required: true },
    fecha: { type: Date, required: true, default: Date.now },
    // Otros campos y validaciones
});
exports.default = mongoose_1.default.model('InversionRealizada', inversionRealizadaSchema);
