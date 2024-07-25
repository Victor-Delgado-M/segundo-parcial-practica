import { Controller, Get, Param, Query } from '@nestjs/common';
import { DeviceService } from './device.service';  
import { Device } from '../device/entidad';  

@Controller('devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get()
  async getDevices(): Promise<Device[]> {
    return this.deviceService.findAll();
  }

  @Get(':id')
  async getDeviceById(@Param('id') id: number): Promise<Device> {
    return this.deviceService.findOne(id);
  }

  @Get('/code/:codigo')
  async getDeviceByCode(@Param('codigo') codigo: string): Promise<Device[]> {
    return this.deviceService.findByCode(codigo);
  }

  @Get('/under-100')
  async getDevicesUnder100(): Promise<Device[]> {
    return this.deviceService.findUnder100();
  }
}
