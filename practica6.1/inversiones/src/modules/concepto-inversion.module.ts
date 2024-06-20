import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptoInversionService } from '../services/concepto-inversion.service';
import { ConceptoInversionController } from '../controllers/concepto-inversion.controller';
import { ConceptoInversion } from '../entities/concepto-inversion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConceptoInversion])],
  controllers: [ConceptoInversionController],
  providers: [ConceptoInversionService],
})
export class ConceptoInversionModule {}

