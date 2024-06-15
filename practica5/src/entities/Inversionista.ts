import mongoose, { Document } from 'mongoose';

export interface IInversionista extends Document {
  nombre: string;
  email: string;
  // Otros campos según sea necesario
}

const inversionistaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Otros campos y validaciones
});

export default mongoose.model<IInversionista>('Inversionista', inversionistaSchema);
