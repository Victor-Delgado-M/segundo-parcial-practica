import { IsNotEmpty, IsNumber, IsDateString, IsPositive, IsOptional } from 'class-validator';

export class UpdateInversionDto {
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  inversionistaId?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  conceptoInversionId?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  valorInversion?: number;

  @IsOptional()
  @IsDateString()
  @IsNotEmpty()
  fecha?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  duracion?: number;

  @IsOptional()
  @IsNotEmpty()
  estado?: string;
}

