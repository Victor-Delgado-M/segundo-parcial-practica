import mongoose, { Document } from 'mongoose';

export interface IConceptoInversion extends Document {
  concepto: string;
  detalle: string;
  // Otros campos según sea necesario
}

const conceptoInversionSchema = new mongoose.Schema({
  concepto: { type: String, required: true },
  detalle: { type: String, required: true },
  // Otros campos y validaciones
});

export default mongoose.model<IConceptoInversion>('ConceptoInversion', conceptoInversionSchema);
