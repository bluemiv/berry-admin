import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBuyerDto } from './dto/create-buyer.dto';

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
  create(@Body() createBuyerDto: CreateBuyerDto): string {
    console.log(createBuyerDto);
    return 'create';
  }
}
