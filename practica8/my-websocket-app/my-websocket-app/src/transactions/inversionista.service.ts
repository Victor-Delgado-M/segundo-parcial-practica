import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inversionista } from '../entities/inversionista.entity';

@Injectable()
export class InversionistaService {
  constructor(
    @InjectRepository(Inversionista)
    private inversionistaRepository: Repository<Inversionista>,
  ) {}

  async create(inversionista: Partial<Inversionista>): Promise<Inversionista> {
    return await this.inversionistaRepository.save(inversionista);
  }

  async findAll(): Promise<Inversionista[]> {
    return await this.inversionistaRepository.find();
  }

  async findById(id: number): Promise<Inversionista> {
    return await this.inversionistaRepository.findOneBy({id});
  }

  async update(id: number, data: Partial<Inversionista>): Promise<Inversionista> {
    await this.inversionistaRepository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.inversionistaRepository.delete(id);
    return result.affected > 0;
  }
}
