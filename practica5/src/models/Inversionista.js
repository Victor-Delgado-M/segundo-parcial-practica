"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var inversionistaSchema = new mongoose_1.default.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // Otros campos según tu modelo
});
var InversionistaModel = mongoose_1.default.model('Inversionista', inversionistaSchema);
exports.default = InversionistaModel;
