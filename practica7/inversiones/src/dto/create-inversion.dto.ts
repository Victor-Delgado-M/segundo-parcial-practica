import { InputType, Field, Float, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateInversionInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => Float)
  @IsNumber()
  monto: number;

  @Field(() => String, { defaultValue: 'ACTIVO' })
  estado?: string;

  @Field(() => ID)
  @IsNotEmpty()
  inversionistaId: number;

  @Field(() => ID)
  @IsNotEmpty()
  conceptoInversionId: number;
}
