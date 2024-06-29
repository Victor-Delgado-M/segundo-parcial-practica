import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inversion } from '../entities/inversion.entity';
import { InversionService } from '../services/inversion.service';
import { InversionResolver } from '../resolvers/inversion.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inversion]),
  ],
  providers: [InversionService, InversionResolver],
  exports: [InversionService],
})
export class InversionModule {}
