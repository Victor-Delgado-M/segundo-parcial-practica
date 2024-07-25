import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Device {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  codigo: string;

  @Field()
  @Column()
  detalle: string;

  @Field()
  @Column()
  clasificacion: string;

  @Field()
  @Column()
  caracteristicas: string;

  @Field(() => Float)
  @Column('float')
  costoAproximado: number;

  @Field()
  @Column()
  fechaUltimaActualizacionFirmware: string; // Considera usar el tipo `Date` si prefieres manejar fechas

  @Field()
  @Column()
  empresa: string;

  @Field({ defaultValue: true })
  @Column({ default: true })
  isActive: boolean;
}
