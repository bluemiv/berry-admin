import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBuyerDTO } from './dto/create-buyer-d-t.o';

@Controller('buyer')
export class BuyerController {
  @Get()
  findAll(): string {
    return 'findAll';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    console.log(id);
    return 'findOne';
  }

  @Post()
  create(@Body() createBuyerDto: CreateBuyerDTO): string {
    console.log(createBuyerDto);
    return 'create';
  }
}
