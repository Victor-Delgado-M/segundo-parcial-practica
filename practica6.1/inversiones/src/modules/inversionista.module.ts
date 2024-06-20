import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InversionistaService } from '../services/inversionista.service';
import { InversionistaController } from '../controllers/inversionista.controller';
import { Inversionista } from '../entities/inversionista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inversionista])],
  controllers: [InversionistaController],
  providers: [InversionistaService],
})
export class InversionistaModule {}

