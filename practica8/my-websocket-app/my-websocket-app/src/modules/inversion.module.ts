import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inversion } from '../entities/inversion.entity';
import { InversionService } from '../transactions/inversion.service';
import { InversionController } from '../controllers/inversion.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inversion]), // Importa la entidad
  ],
  providers: [InversionService], // Registra el servicio
  controllers: [InversionController], // Registra el controlador
  exports: [InversionService], // Exporta el servicio si es necesario
})
export class InversionModule {}
