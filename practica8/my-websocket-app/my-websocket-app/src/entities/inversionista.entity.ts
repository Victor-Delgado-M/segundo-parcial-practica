import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Inversionista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  edad: number;
}
