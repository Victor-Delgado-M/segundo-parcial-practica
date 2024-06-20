import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateConceptoInversionDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  concepto?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  detalle?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  estado?: string;
}

