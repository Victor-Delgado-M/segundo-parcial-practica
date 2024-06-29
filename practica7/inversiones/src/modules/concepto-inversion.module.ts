import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptoInversion } from '../entities/concepto-inversion.entity';
import { ConceptoInversionService } from '../services/concepto-inversion.service';
import { ConceptoInversionResolver } from '../resolvers/concepto-inversion.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConceptoInversion]),
  ],
  providers: [ConceptoInversionService, ConceptoInversionResolver],
  exports: [ConceptoInversionService],
})
export class ConceptoInversionModule {}
