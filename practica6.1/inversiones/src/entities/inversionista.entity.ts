import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Inversion } from './inversionrealizada.entity';

@Entity()
export class Inversionista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  identificacion: string;

  @OneToMany(() => Inversion, inversion => inversion.inversionista)
  inversiones: Inversion[];

  @Column({ default: 'ACTIVO' })
  estado: string;
}

