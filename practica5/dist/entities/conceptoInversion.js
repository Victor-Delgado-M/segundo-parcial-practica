"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const conceptoInversionSchema = new mongoose_1.default.Schema({
    concepto: { type: String, required: true },
    detalle: { type: String, required: true },
    // Otros campos y validaciones
});
exports.default = mongoose_1.default.model('ConceptoInversion', conceptoInversionSchema);
