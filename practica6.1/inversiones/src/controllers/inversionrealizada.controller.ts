import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InversionService } from '../services/inversionrealizada.service';
import { CreateInversionDto } from '../dtos/create-inversion.dto';
import { UpdateInversionDto } from '../dtos/update-inversion.dto';
import { Inversion } from 'src/entities/inversionrealizada.entity';

@Controller('inversiones')
export class InversionController {
  constructor(private readonly inversionService: InversionService) {}

  @Post()
  create(@Body() createInversionDto: CreateInversionDto) {
    return this.inversionService.create(createInversionDto);
  }

  @Get()
  findAll() {
    return this.inversionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.inversionService.findOne(id);
  }
  @Get(':id')
  async findOneWithRelations(@Param('id') id: number): Promise<Inversion> {
    return await this.inversionService.findOneWithRelations(id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateInversionDto: UpdateInversionDto) {
    return this.inversionService.update(id, updateInversionDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.inversionService.delete(id);
  }
}

