import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConceptoInversionDto {
  @IsString()
  @IsNotEmpty()
  concepto: string;

  @IsString()
  @IsNotEmpty()
  detalle: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}

