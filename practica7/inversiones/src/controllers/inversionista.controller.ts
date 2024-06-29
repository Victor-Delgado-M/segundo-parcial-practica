import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InversionistaService } from '../services/inversionista.service';
import { CreateInversionistaInput } from '../dto/create-inversionista.dto';
import { UpdateInversionistaInput } from '../dto/update-inversionista.dto';
import { Inversionista } from '../entities/inversionista.entity';

@Controller('inversionistas')
export class InversionistaController {
  constructor(private readonly inversionistaService: InversionistaService) {}

  @Get()
  async findAll(): Promise<Inversionista[]> {
    return this.inversionistaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Inversionista> {
    return this.inversionistaService.findOne(Number(id));
  }

  @Post()
  async create(@Body() createDto: CreateInversionistaInput): Promise<Inversionista> {
    return this.inversionistaService.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateInversionistaInput,
  ): Promise<Inversionista> {
    return this.inversionistaService.update(Number(id), updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Inversionista> {
    return this.inversionistaService.delete(Number(id));
  }
}
