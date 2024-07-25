import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateDeviceInput {
  @Field()
  codigo: string;

  @Field()
  detalle: string;

  @Field()
  clasificacion: string;

  @Field()
  caracteristicas: string;

  @Field(() => Float)
  costoAproximado: number;

  @Field()
  fechaUltimaActualizacionFirmware: string; // Usa `string` para la fecha, puedes usar `Date` si estás manejando fechas en el formato adecuado

  @Field()
  empresa: string;
}

@InputType()
export class UpdateDeviceInput {

  @Field({ nullable: true })
  codigo?: string;

  @Field({ nullable: true })
  detalle?: string;

  @Field({ nullable: true })
  clasificacion?: string;

  @Field({ nullable: true })
  caracteristicas?: string;

  @Field(() => Float, { nullable: true })
  costoAproximado?: number;

  @Field({ nullable: true })
  fechaUltimaActualizacionFirmware?: string; // Usa `string` para la fecha, puedes usar `Date` si estás manejando fechas en el formato adecuado

  @Field({ nullable: true })
  empresa?: string;

  @Field({ nullable: true })
  isActive?: boolean;
}
