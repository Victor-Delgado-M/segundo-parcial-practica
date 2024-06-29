import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Inversion } from './inversion.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({name: 'ConceptoInversion'})
export class ConceptoInversion {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(() => String)
  descripcion: string;

  @OneToMany(() => Inversion, inversion => inversion.conceptoInversion)
  inversiones: Inversion[];

  @Column({ default: 'ACTIVO' })
  estado: string;
}
