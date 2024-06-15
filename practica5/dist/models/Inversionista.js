"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const inversionistaSchema = new mongoose_1.default.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // Otros campos según tu modelo
});
const InversionistaModel = mongoose_1.default.model('Inversionista', inversionistaSchema);
exports.default = InversionistaModel;
