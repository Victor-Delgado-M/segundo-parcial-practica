import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inversion } from '../entities/inversionrealizada.entity';
import { CreateInversionDto } from '../dtos/create-inversion.dto';
import { UpdateInversionDto } from '../dtos/update-inversion.dto';

@Injectable()
export class InversionService {
  constructor(
    @InjectRepository(Inversion)
    private readonly inversionRepository: Repository<Inversion>,
  ) {}

  async create(createInversionDto: CreateInversionDto): Promise<Inversion> {
    const inversion = this.inversionRepository.create(createInversionDto);
    return this.inversionRepository.save(inversion);
  }

  async findAll(): Promise<Inversion[]> {
    return this.inversionRepository.find({
      relations: ['inversionista', 'conceptoInversion'],
    });
  }
  async findOneWithRelations(id: number): Promise<Inversion> {
    return await this.inversionRepository.findOne({
      where: { id },
      relations: ['inversionista', 'conceptoInversion']
    });
  }
  
  async findOne(id: number): Promise<Inversion> {
    return this.inversionRepository.findOne({
      where: { id },
      relations: ['inversionista', 'conceptoInversion'],
    });
  }

  async update(id: number, updateInversionDto: UpdateInversionDto): Promise<Inversion> {
    await this.inversionRepository.update(id, updateInversionDto);
    return this.inversionRepository.findOne({
      where: { id },
      relations: ['inversionista', 'conceptoInversion'],
    });
  }

  async delete(id: number): Promise<Inversion> {
    const inversion = await this.inversionRepository.findOne({ where: { id } });
    if (!inversion) {
      throw new NotFoundException(`Inversión con ID ${id} no encontrada`);
    }

    await this.inversionRepository.update(id, { estado: 'INACTIVO' });

    // Devolver los datos de la inversión eliminada
    return inversion;
  }
}

