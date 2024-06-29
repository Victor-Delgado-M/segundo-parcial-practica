import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inversionista } from '../entities/inversionista.entity';
import { CreateInversionistaInput } from '../dto/create-inversionista.dto';
import { UpdateInversionistaInput } from '../dto/update-inversionista.dto';

@Injectable()
export class InversionistaService {
  constructor(
    @InjectRepository(Inversionista)
    private inversionistaRepository: Repository<Inversionista>,
  ) {}

  async findAll(): Promise<Inversionista[]> {
    return this.inversionistaRepository.find();
  }

  async findOne(id: number): Promise<Inversionista> {
    return this.inversionistaRepository.findOneBy({id});
  }

  async create(input: CreateInversionistaInput): Promise<Inversionista> {
    const inversionista = this.inversionistaRepository.create(input);
    return this.inversionistaRepository.save(inversionista);
  }

  async update(id: number, updateData: UpdateInversionistaInput): Promise<Inversionista> {
    const inversionista = await this.inversionistaRepository.findOneBy({id});
    if (!inversionista) {
      throw new Error(`Inversionista with ID ${id} not found`);
    }

    Object.assign(inversionista, updateData);
    return await this.inversionistaRepository.save(inversionista);
  }

  async delete(id: number): Promise<Inversionista> {
    const inversionista = await this.findOne(id);
    if (inversionista) {
      await this.inversionistaRepository.delete(id);
    }
    return inversionista;
  }
}
