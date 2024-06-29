import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Inversion } from '../entities/inversion.entity';
import { InversionService } from '../services/inversion.service';
import { CreateInversionInput } from '../dto/create-inversion.dto';
import { UpdateInversionInput } from '../dto/update-inversion.dto';

@Controller('inversiones')
export class InversionController {
  constructor(private readonly inversionService: InversionService) {}

  @Get()
  async findAll(): Promise<Inversion[]> {
    return this.inversionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Inversion> {
    return this.inversionService.findOne(id);
  }

  @Post()
  async create(@Body() createInversionDto: CreateInversionInput): Promise<Inversion> {
    return this.inversionService.create(createInversionDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateInversionDto: UpdateInversionInput,
  ): Promise<Inversion> {
    return this.inversionService.update(id, updateInversionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Inversion> {
    return this.inversionService.delete(id);
  }
}
