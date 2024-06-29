import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Inversionista } from './inversionista.entity';
import { ConceptoInversion } from './concepto-inversion.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'Inversion' })
export class Inversion {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column('float')
  monto: number;

  @ManyToOne(() => Inversionista, inversionista => inversionista.inversionesRealizadas)
  @Field(() => Inversionista) // Asegura que el tipo devuelto sea Inversionista
  inversionista: Inversionista;

  @ManyToOne(() => ConceptoInversion, conceptoInversion => conceptoInversion.inversiones)
  @Field(() => ConceptoInversion) // Asegura que el tipo devuelto sea ConceptoInversion
  conceptoInversion: ConceptoInversion;

  @Column({ default: 'ACTIVO' })
  estado: string;
}
