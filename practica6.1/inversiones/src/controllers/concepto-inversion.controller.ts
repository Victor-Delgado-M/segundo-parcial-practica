import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ConceptoInversionService } from '../services/concepto-inversion.service';
import { CreateConceptoInversionDto } from '../dtos/create-conceptoinversion.dto';
import { UpdateConceptoInversionDto } from '../dtos/update-conceptoinversion.dto';

@Controller('conceptos-inversion')
export class ConceptoInversionController {
  constructor(private readonly conceptoInversionService: ConceptoInversionService) {}

  @Post()
  create(@Body() createConceptoInversionDto: CreateConceptoInversionDto) {
    return this.conceptoInversionService.create(createConceptoInversionDto);
  }

  @Get()
  findAll() {
    return this.conceptoInversionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.conceptoInversionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateConceptoInversionDto: UpdateConceptoInversionDto) {
    return this.conceptoInversionService.update(id, updateConceptoInversionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conceptoInversionService.delete(+id);
  }
}


