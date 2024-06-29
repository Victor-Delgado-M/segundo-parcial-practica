import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

@InputType()
export class CreateInversionistaInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  apellido: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String, { defaultValue: 'ACTIVO' })
  estado?: string;
}
