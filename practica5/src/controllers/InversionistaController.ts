import { Request, Response } from 'express';
import InversionistaModel, { IInversionista } from '../models/Inversionista';

// Obtener todos los inversionistas
export const getInversionistas = async (req: Request, res: Response) => {
  try {
    const inversionistas = await InversionistaModel.find();
    res.json(inversionistas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los inversionistas' });
  }
};

// Obtener un inversionista por su ID
export const getInversionistaById = async (req: Request, res: Response) => {
  try {
    const inversionista = await InversionistaModel.findById(req.params.id);
    if (!inversionista) {
      return res.status(404).json({ error: 'Inversionista no encontrado' });
    }
    res.json(inversionista);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el inversionista' });
  }
};

// Crear un nuevo inversionista
export const createInversionista = async (req: Request, res: Response) => {
  try {
    const nuevoInversionista: IInversionista = new InversionistaModel(req.body);
    const inversionistaGuardado = await nuevoInversionista.save();
    res.status(201).json(inversionistaGuardado);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el inversionista' });
  }
};

// Actualizar un inversionista por su ID
export const updateInversionista = async (req: Request, res: Response) => {
  try {
    const inversionistaActualizado = await InversionistaModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!inversionistaActualizado) {
      return res.status(404).json({ error: 'Inversionista no encontrado' });
    }
    res.json(inversionistaActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el inversionista' });
  }
};

// Eliminar un inversionista por su ID
export const deleteInversionista = async (req: Request, res: Response) => {
  try {
    const inversionistaEliminado = await InversionistaModel.findByIdAndDelete(req.params.id);
    if (!inversionistaEliminado) {
      return res.status(404).json({ error: 'Inversionista no encontrado' });
    }
    res.json({ message: 'Inversionista eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el inversionista' });
  }
};
