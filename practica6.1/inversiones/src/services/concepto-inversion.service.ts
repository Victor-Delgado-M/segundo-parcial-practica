import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConceptoInversion } from '../entities/concepto-inversion.entity';
import { CreateConceptoInversionDto } from '../dtos/create-conceptoinversion.dto';
import { UpdateConceptoInversionDto } from '../dtos/update-conceptoinversion.dto';

@Injectable()
export class ConceptoInversionService {
  [x: string]: any;
  constructor(
    @InjectRepository(ConceptoInversion)
    private readonly conceptoInversionRepository: Repository<ConceptoInversion>,
  ) {}

  async create(createConceptoInversionDto: CreateConceptoInversionDto): Promise<ConceptoInversion> {
    const conceptoInversion = this.conceptoInversionRepository.create(createConceptoInversionDto);
    return this.conceptoInversionRepository.save(conceptoInversion);
  }

  async findAll(): Promise<ConceptoInversion[]> {
    return this.conceptoInversionRepository.find();
  }

  async findOne(id: number): Promise<ConceptoInversion> {
    return this.conceptoInversionRepository.findOneBy({ id });
  }

  async update(id: number, updateConceptoInversionDto: UpdateConceptoInversionDto): Promise<ConceptoInversion> {
    await this.conceptoInversionRepository.update(id, updateConceptoInversionDto);
    return this.conceptoInversionRepository.findOneBy({ id });
  }
 
  async delete(id: number): Promise<ConceptoInversion> {
    const conceptoInversion = await this.conceptoInversionRepository.findOne({ where: { id } });
    if (!conceptoInversion) {
      throw new NotFoundException(`Concepto de inversión con ID ${id} no encontrado`);
    }

    await this.conceptoInversionRepository.update(id, { estado: 'INACTIVO' });

    // Devolver los datos del concepto de inversión eliminado
    return conceptoInversion;
  }

}

