import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from './entidad';
import { DeviceService } from './service';
import { DeviceResolver } from './resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Device])],
  providers: [DeviceService, DeviceResolver],
  exports: [DeviceService],
})
export class DeviceModule {}

