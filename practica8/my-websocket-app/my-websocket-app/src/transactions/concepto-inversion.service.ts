import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConceptoInversion } from '../entities/concepto-inversion.entity';

@Injectable()
export class ConceptoInversionService {
  constructor(
    @InjectRepository(ConceptoInversion)
    private conceptoInversionRepository: Repository<ConceptoInversion>,
  ) {}

  async create(concepto: Partial<ConceptoInversion>): Promise<ConceptoInversion> {
    return await this.conceptoInversionRepository.save(concepto);
  }

  async findAll(): Promise<ConceptoInversion[]> {
    return await this.conceptoInversionRepository.find();
  }

  async findById(id: number): Promise<ConceptoInversion> {
    return await this.conceptoInversionRepository.findOneBy({id});
  }

  async update(id: number, data: Partial<ConceptoInversion>): Promise<ConceptoInversion> {
    await this.conceptoInversionRepository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.conceptoInversionRepository.delete(id);
    return result.affected > 0;
  }
}
