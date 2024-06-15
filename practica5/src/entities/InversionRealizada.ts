import mongoose, { Document } from 'mongoose';
import { IInversionista } from './Inversionista';
import { IConceptoInversion } from './conceptoInversion';

export interface IInversionRealizada extends Document {
  inversionistaId: mongoose.Types.ObjectId;
  conceptoInversionId: mongoose.Types.ObjectId;
  monto: number;
  fecha: Date;
  // Otros campos según sea necesario
}

const inversionRealizadaSchema = new mongoose.Schema({
  inversionistaId: { type: mongoose.Types.ObjectId, required: true, ref: 'Inversionista' },
  conceptoInversionId: { type: mongoose.Types.ObjectId, required: true, ref: 'ConceptoInversion' },
  monto: { type: Number, required: true },
  fecha: { type: Date, required: true, default: Date.now },
  // Otros campos y validaciones
});

export default mongoose.model<IInversionRealizada>('InversionRealizada', inversionRealizadaSchema);
