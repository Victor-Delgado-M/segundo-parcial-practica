import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inversionista } from '../entities/inversionista.entity';
import { InversionistaService } from '../services/inversionista.service';
import { InversionistaResolver } from '../resolvers/inversionista.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inversionista]),
  ],
  providers: [InversionistaService, InversionistaResolver],
  exports: [InversionistaService],
})
export class InversionistaModule {}
