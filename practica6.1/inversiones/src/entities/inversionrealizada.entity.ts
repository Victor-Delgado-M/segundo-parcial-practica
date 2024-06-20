import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Inversionista } from './inversionista.entity';
import { ConceptoInversion } from './concepto-inversion.entity';

@Entity()
export class Inversion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Inversionista, inversionista => inversionista.inversiones)
  @JoinColumn({ name: 'inversionistaId' })
  inversionista: Inversionista;

  @ManyToOne(() => ConceptoInversion, conceptoInversion => conceptoInversion.inversiones)
  @JoinColumn({ name: 'conceptoInversionId' }) 
  conceptoInversion: ConceptoInversion;

  @Column()
  valorInversion: number;

  @Column()
  fecha: Date;

  @Column()
  duracion: number; // En días, meses, años, etc. dependiendo de tu requerimiento

  @Column({ default: 'ACTIVO' }) // Valor por defecto para el estado
  estado: string;
}

