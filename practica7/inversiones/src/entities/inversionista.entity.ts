import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Inversion } from './inversion.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({name: 'Inversionista'})
export class Inversionista {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(() => String)
  apellido: string;

  @Column()
  @Field(() => String)
  email: string;

  @OneToMany(() => Inversion, inversion => inversion.inversionista)
  inversionesRealizadas: Inversion[];

  @Column({ default: 'ACTIVO' })
  estado: string;
}
