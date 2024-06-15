import express from 'express';
import { getInversionistas, getInversionistaById, createInversionista, updateInversionista, deleteInversionista } from '../controllers/InversionistaController';


const router = express.Router();

// Rutas para los inversionistas
router.get('/inversionistas', getInversionistas);
router.get('/inversionistas/:id', getInversionistaById);
router.post('/inversionistas', createInversionista);
router.put('/inversionistas/:id', updateInversionista);
router.delete('/inversionistas/:id', deleteInversionista);

export default router;
