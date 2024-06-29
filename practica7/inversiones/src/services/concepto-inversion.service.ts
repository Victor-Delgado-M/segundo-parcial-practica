import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConceptoInversion } from '../entities/concepto-inversion.entity';
import { CreateConceptoInversionInput } from '../dto/create-concepto-inversion.dto';
import { UpdateConceptoInversionInput } from '../dto/update-concepto-inversion.dto';

@Injectable()
export class ConceptoInversionService {
  delete(arg0: number): ConceptoInversion | PromiseLike<ConceptoInversion> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(ConceptoInversion)
    private readonly conceptoInversionRepository: Repository<ConceptoInversion>,
  ) {}

  async findAll(): Promise<ConceptoInversion[]> {
    return this.conceptoInversionRepository.find();
  }

  async findOne(id: number): Promise<ConceptoInversion> {
    const conceptoInversion = await this.conceptoInversionRepository.findOneBy({id});
    if (!conceptoInversion) {
      throw new NotFoundException(`Concepto de Inversion with id ${id} not found`);
    }
    return conceptoInversion;
  }

  async create(createConceptoInversionInput: CreateConceptoInversionInput): Promise<ConceptoInversion> {
    const conceptoInversion = this.conceptoInversionRepository.create(createConceptoInversionInput);
    return this.conceptoInversionRepository.save(conceptoInversion);
  }

  async update(id: number, updateConceptoInversionInput: UpdateConceptoInversionInput): Promise<ConceptoInversion> {
    const conceptoInversion = await this.findOne(id);

    if (updateConceptoInversionInput.nombre !== undefined) {
      conceptoInversion.nombre = updateConceptoInversionInput.nombre;
    }
    if (updateConceptoInversionInput.descripcion !== undefined) {
      conceptoInversion.descripcion = updateConceptoInversionInput.descripcion;
    }
    if (updateConceptoInversionInput.estado !== undefined) {
      conceptoInversion.estado = updateConceptoInversionInput.estado;
    }

    return this.conceptoInversionRepository.save(conceptoInversion);
  }

  async remove(id: number): Promise<ConceptoInversion> {
    const conceptoInversion = await this.findOne(id);
    return this.conceptoInversionRepository.remove(conceptoInversion);
  }
}
