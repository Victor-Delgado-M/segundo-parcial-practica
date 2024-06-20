import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInversionistaDto } from '../dtos/create-inversionista.dto';
import { UpdateInversionistaDto } from '../dtos/update-inversionista.dto';
import { Inversionista } from '../entities/inversionista.entity';

@Injectable()
export class InversionistaService {
  constructor(
    @InjectRepository(Inversionista)
    private readonly inversionistaRepository: Repository<Inversionista>,
  ) {}

  create(createInversionistaDto: CreateInversionistaDto): Promise<Inversionista> {
    const inversionista = this.inversionistaRepository.create(createInversionistaDto);
    return this.inversionistaRepository.save(inversionista);
  }

  findAll(): Promise<Inversionista[]> {
    return this.inversionistaRepository.find();
  }

  async findOne(id: number): Promise<Inversionista> {
    const inversionista = await this.inversionistaRepository.findOneBy({ id });
    if (!inversionista) {
      throw new NotFoundException(`Inversionista with ID ${id} not found`);
    }
    return inversionista;
  }

  async update(id: number, updateInversionistaDto: UpdateInversionistaDto): Promise<Inversionista> {
    const inversionista = await this.inversionistaRepository.preload({
      id,
      ...updateInversionistaDto,
    });
    if (!inversionista) {
      throw new NotFoundException(`Inversionista with ID ${id} not found`);
    }
    return this.inversionistaRepository.save(inversionista);
  }

  async delete(id: number): Promise<Inversionista> {
    const inversionista = await this.inversionistaRepository.findOne({ where: { id } });
    if (!inversionista) {
      throw new NotFoundException(`Inversionista con ID ${id} no encontrado`);
    }

    await this.inversionistaRepository.update(id, { estado: 'INACTIVO' });

    // Devolver los datos del inversionista eliminado
    return inversionista;
  }
}

