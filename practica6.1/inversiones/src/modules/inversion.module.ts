import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InversionService } from '../services/inversionrealizada.service';
import { InversionController } from '../controllers/inversionrealizada.controller';
import { Inversion } from '../entities/inversionrealizada.entity';
import { Inversionista } from '../entities/inversionista.entity';
import { ConceptoInversion } from '../entities/concepto-inversion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inversion, Inversionista, ConceptoInversion])],
  controllers: [InversionController],
  providers: [InversionService],
})
export class InversionModule {}

