import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ConceptoInversion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
}
