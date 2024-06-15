"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InversionistaController_1 = require("../controllers/InversionistaController");
const router = express_1.default.Router();
// Rutas para los inversionistas
router.get('/inversionistas', InversionistaController_1.getInversionistas);
router.get('/inversionistas/:id', InversionistaController_1.getInversionistaById);
router.post('/inversionistas', InversionistaController_1.createInversionista);
router.put('/inversionistas/:id', InversionistaController_1.updateInversionista);
router.delete('/inversionistas/:id', InversionistaController_1.deleteInversionista);
exports.default = router;
