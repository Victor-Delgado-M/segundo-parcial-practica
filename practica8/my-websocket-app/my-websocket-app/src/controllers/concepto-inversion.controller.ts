import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { ConceptoInversionService } from '../transactions/concepto-inversion.service';
import { ConceptoInversion } from '../entities/concepto-inversion.entity';

@Controller('conceptos-inversion')
export class ConceptoInversionController {
  constructor(private readonly conceptoInversionService: ConceptoInversionService) {}

  @Post()
  async create(@Body() conceptoInversion: Partial<ConceptoInversion>): Promise<ConceptoInversion> {
    return this.conceptoInversionService.create(conceptoInversion);
  }

  @Get()
  async findAll(): Promise<ConceptoInversion[]> {
    return this.conceptoInversionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ConceptoInversion> {
    return this.conceptoInversionService.findById(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() conceptoInversion: Partial<ConceptoInversion>): Promise<ConceptoInversion> {
    return this.conceptoInversionService.update(+id, conceptoInversion);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.conceptoInversionService.delete(+id);
  }
}
