import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Inversion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  monto: number;

  @Column()
  tipo: string;

  @Column()
  fecha: Date;
}
