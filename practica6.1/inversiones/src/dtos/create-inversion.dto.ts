import { IsNotEmpty, IsNumber, IsDateString, IsPositive } from 'class-validator';

export class CreateInversionDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  inversionistaId: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  conceptoInversionId: number;

  @IsNumber()
  @IsNotEmpty()
  valorInversion: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  duracion: number; // En días, meses, años, etc. dependiendo de tu requerimiento

  @IsNotEmpty()
  estado: string;
}

