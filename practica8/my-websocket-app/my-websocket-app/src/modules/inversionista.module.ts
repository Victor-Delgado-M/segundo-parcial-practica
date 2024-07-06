import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inversionista } from '../entities/inversionista.entity';
import { InversionistaService } from '../transactions/inversionista.service';
import { InversionistaController } from '../controllers/inversionista.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inversionista]), // Importa la entidad
  ],
  providers: [InversionistaService], // Registra el servicio
  controllers: [InversionistaController], // Registra el controlador
  exports: [InversionistaService], // Exporta el servicio si es necesario
})
export class InversionistaModule {}
