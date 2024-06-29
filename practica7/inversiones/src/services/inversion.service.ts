import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inversion } from '../entities/inversion.entity';
import { CreateInversionInput } from '../dto/create-inversion.dto';
import { UpdateInversionInput } from '../dto/update-inversion.dto';

@Injectable()
export class InversionService {
  remove(id: string): Inversion | PromiseLike<Inversion> {
    throw new Error('Method not implemented.');
  }
  findAll(): Inversion[] | PromiseLike<Inversion[]> {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Inversion)
    private inversionRepository: Repository<Inversion>,
  ) {}

  async findOne(id: number): Promise<Inversion> {
    const inversion = await this.inversionRepository.findOneBy({id});
    if (!inversion) {
      throw new NotFoundException(`Inversion with ID ${id} not found`);
    }
    return inversion;
  }

  async create(createInversionDto: CreateInversionInput): Promise<Inversion> {
    const newInversion = this.inversionRepository.create(createInversionDto);
    return await this.inversionRepository.save(newInversion);
  }

  async update(id: number, updateInversionInput: UpdateInversionInput): Promise<Inversion> {
    const inversion = await this.inversionRepository.findOneBy({id});

    if (!inversion) {
      throw new Error(`Inversion with id ${id} not found`);
    }

    // Actualizar solo los campos definidos en updateInversionInput
    Object.assign(inversion, updateInversionInput);

    return await this.inversionRepository.save(inversion);
  }

  async delete(id: number): Promise<Inversion> {
    const inversion = await this.findOne(id);
    return await this.inversionRepository.remove(inversion);
  }
}
