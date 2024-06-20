import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InversionistaService } from '../services/inversionista.service';
import { CreateInversionistaDto } from '../dtos/create-inversionista.dto';
import { UpdateInversionistaDto } from '../dtos/update-inversionista.dto';

@Controller('inversionistas')
export class InversionistaController {
  constructor(private readonly inversionistaService: InversionistaService) {}

  @Post()
  create(@Body() createInversionistaDto: CreateInversionistaDto) {
    return this.inversionistaService.create(createInversionistaDto);
  }

  @Get()
  findAll() {
    return this.inversionistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inversionistaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateInversionistaDto: UpdateInversionistaDto) {
    return this.inversionistaService.update(+id, updateInversionistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inversionistaService.delete(+id);
  }
}



