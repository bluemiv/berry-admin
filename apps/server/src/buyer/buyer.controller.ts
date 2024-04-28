import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBuyerDTO } from './dto/create-buyer.dto';
import { BuyerService } from './buyer.service';

@Controller('buyer')
export class BuyerController {
  constructor(private buyerService: BuyerService) {}

  @Get('/')
  findAll(): string {
    return 'findAll';
  }

  @Get('/:id')
  findOne(@Param('id') id): string {
    console.log(id);
    return 'findOne';
  }

  @Post('/')
  create(@Body() createBuyerDto: CreateBuyerDTO) {
    return this.buyerService.create(createBuyerDto);
  }
}
