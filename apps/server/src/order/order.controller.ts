import { Controller, Get, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { FindOrderDto } from './dto/find-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll(@Query() findOrderDto: FindOrderDto) {
    return this.orderService.findAll(findOrderDto);
  }
}
