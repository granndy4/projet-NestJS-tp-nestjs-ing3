import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelService } from './travel.service.js';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  
  create(): string {
    return 'Planifier un nouveau voyage ici';
  }

  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelService.findOne(+id);
  }
}

  
