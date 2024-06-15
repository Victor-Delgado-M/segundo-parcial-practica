"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InversionistaController_1 = __importDefault(require("../controllers/InversionistaController"));
const router = express_1.default.Router();
const inversionistaController = new InversionistaController_1.default();
// Rutas para los inversionistas
router.get('/inversionistas', inversionistaController.getAll);
router.get('/inversionistas/:id', inversionistaController.getById);
router.post('/inversionistas', inversionistaController.create);
router.put('/inversionistas/:id', inversionistaController.update);
router.delete('/inversionistas/:id', inversionistaController.delete);
exports.default = router;
