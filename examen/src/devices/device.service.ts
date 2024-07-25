import { Injectable } from '@nestjs/common';
import { Device } from '../device/entidad';  
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
  ) {}

  async findAll(): Promise<Device[]> {
    return this.deviceRepository.find();
  }

  async findOne(id: number): Promise<Device> {
    return this.deviceRepository.findOneBy({id});
  }

  async findByCode(codigo: string): Promise<Device[]> {
    return this.deviceRepository.find({ where: { codigo } });
  }

  async findUnder100(): Promise<Device[]> {
    return this.deviceRepository.createQueryBuilder('device')
      .where('device.costoAproximado < :costo', { costo: 100 })
      .getMany();
  }
}
