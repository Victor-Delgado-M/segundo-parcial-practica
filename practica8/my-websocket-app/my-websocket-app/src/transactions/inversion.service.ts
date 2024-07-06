import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inversion } from '../entities/inversion.entity';

@Injectable()
export class InversionService {
  constructor(
    @InjectRepository(Inversion)
    private inversionRepository: Repository<Inversion>,
  ) {}

  async create(inversion: Partial<Inversion>): Promise<Inversion> {
    return await this.inversionRepository.save(inversion);
  }

  async findAll(): Promise<Inversion[]> {
    return await this.inversionRepository.find();
  }

  async findById(id: number): Promise<Inversion> {
    return await this.inversionRepository.findOneBy({id});
  }

  async update(id: number, data: Partial<Inversion>): Promise<Inversion> {
    await this.inversionRepository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.inversionRepository.delete(id);
    return result.affected > 0;
  }
}
