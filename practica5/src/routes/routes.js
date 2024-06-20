"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var InversionistaController_1 = require("../controllers/InversionistaController");
var router = express_1.default.Router();

// Rutas para los inversionistas
router.get('/inversionistas', InversionistaController_1.getInversionistas);
router.get('/inversionistas/:id', InversionistaController_1.getInversionistaById);
router.post('/inversionistas', InversionistaController_1.createInversionista);
router.put('/inversionistas/:id', InversionistaController_1.updateInversionista);
router.delete('/inversionistas/:id', InversionistaController_1.deleteInversionista);
exports.default = router;
