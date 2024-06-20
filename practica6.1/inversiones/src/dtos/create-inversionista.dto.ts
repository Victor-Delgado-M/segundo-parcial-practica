import { IsString, IsNotEmpty } from 'class-validator';

export class CreateInversionistaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  identificacion: string;
}

