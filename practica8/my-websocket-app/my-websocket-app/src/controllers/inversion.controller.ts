import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { InversionService } from '../transactions/inversion.service';
import { Inversion } from '../entities/inversion.entity';

@Controller('inversiones')
export class InversionController {
  constructor(private readonly inversionService: InversionService) {}

  @Post()
  async create(@Body() inversion: Partial<Inversion>): Promise<Inversion> {
    return this.inversionService.create(inversion);
  }

  @Get()
  async findAll(): Promise<Inversion[]> {
    return this.inversionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Inversion> {
    return this.inversionService.findById(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() inversion: Partial<Inversion>): Promise<Inversion> {
    return this.inversionService.update(+id, inversion);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.inversionService.delete(+id);
  }
}
