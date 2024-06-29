import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ConceptoInversionService } from '../services/concepto-inversion.service';
import { CreateConceptoInversionInput } from '../dto/create-concepto-inversion.dto';
import { UpdateConceptoInversionInput } from '../dto/update-concepto-inversion.dto';
import { ConceptoInversion } from '../entities/concepto-inversion.entity';

@Controller('conceptos-inversion')
export class ConceptoInversionController {
  constructor(private readonly conceptoInversionService: ConceptoInversionService) {}

  @Get()
  async findAll(): Promise<ConceptoInversion[]> {
    return this.conceptoInversionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ConceptoInversion> {
    return this.conceptoInversionService.findOne(Number(id));
  }

  @Post()
  async create(@Body() createDto: CreateConceptoInversionInput): Promise<ConceptoInversion> {
    return this.conceptoInversionService.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateConceptoInversionInput,
  ): Promise<ConceptoInversion> {
    return this.conceptoInversionService.update(Number(id), updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<ConceptoInversion> {
    return this.conceptoInversionService.delete(Number(id));
  }
}
