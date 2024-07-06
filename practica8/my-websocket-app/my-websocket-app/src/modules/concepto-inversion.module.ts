import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptoInversion } from '../entities/concepto-inversion.entity';
import { ConceptoInversionService } from '../transactions/concepto-inversion.service';
import { ConceptoInversionController } from '../controllers/concepto-inversion.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConceptoInversion]), // Importa la entidad
  ],
  providers: [ConceptoInversionService], // Registra el servicio
  controllers: [ConceptoInversionController], // Registra el controlador
  exports: [ConceptoInversionService], // Exporta el servicio si es necesario
})
export class ConceptoInversionModule {}
