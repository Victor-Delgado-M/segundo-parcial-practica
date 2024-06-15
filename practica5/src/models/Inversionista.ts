import mongoose, { Document } from 'mongoose';

export interface IInversionista extends Document {
  nombre: string;
  email: string;
  // Otros campos según tu modelo
}

const inversionistaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Otros campos según tu modelo
});

const InversionistaModel = mongoose.model<IInversionista>('Inversionista', inversionistaSchema);

export default InversionistaModel;
