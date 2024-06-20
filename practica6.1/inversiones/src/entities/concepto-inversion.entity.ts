import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Inversion } from './inversionrealizada.entity';

@Entity()
export class ConceptoInversion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  concepto: string;

  @Column()
  detalle: string;

  @Column({ default: 'ACTIVO' }) // Valor por defecto para el estado
  estado: string;

  @OneToMany(() => Inversion, inversion => inversion.conceptoInversion)
  inversiones: Inversion[];
}

