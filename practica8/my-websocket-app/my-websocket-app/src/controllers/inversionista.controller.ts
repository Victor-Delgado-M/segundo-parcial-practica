import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { InversionistaService } from '../transactions/inversionista.service';
import { Inversionista } from '../entities/inversionista.entity';

@Controller('inversionistas')
export class InversionistaController {
  constructor(private readonly inversionistaService: InversionistaService) {}

  @Post()
  async create(@Body() inversionista: Partial<Inversionista>): Promise<Inversionista> {
    return this.inversionistaService.create(inversionista);
  }

  @Get()
  async findAll(): Promise<Inversionista[]> {
    return this.inversionistaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Inversionista> {
    return this.inversionistaService.findById(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() inversionista: Partial<Inversionista>): Promise<Inversionista> {
    return this.inversionistaService.update(+id, inversionista);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.inversionistaService.delete(+id);
  }
}
