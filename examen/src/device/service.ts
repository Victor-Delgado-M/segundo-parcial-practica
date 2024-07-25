import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from './entidad';
import { CreateDeviceInput, UpdateDeviceInput  } from './Dtos';


@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
  ) {}

  async create(createDeviceInput: CreateDeviceInput): Promise<Device> {
    const device = this.deviceRepository.create(createDeviceInput);
    return this.deviceRepository.save(device);
  }

  async findAll(): Promise<Device[]> {
    return this.deviceRepository.find();
  }

  async findOne(id: number): Promise<Device> {
    return this.deviceRepository.findOneBy({ id });
  }

  async update(id: number, updateDeviceInput: UpdateDeviceInput): Promise<Device> {
    await this.deviceRepository.update(id, updateDeviceInput);
    return this.deviceRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.deviceRepository.delete(id);
  }

  async logicalRemove(id: number): Promise<Device> {
    const device = await this.deviceRepository.findOneBy({ id });
    if (device) {
      device.isActive = false;
      return this.deviceRepository.save(device);
    }
    return null;
  }
}
