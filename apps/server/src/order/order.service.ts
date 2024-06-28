import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { FindOrderDto } from './dto/find-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
  ) {}

  async findAll(findOrderDto: FindOrderDto) {
    const { limit, page } = findOrderDto;
    const [data, count] = await this.orderRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return { data, count };
  }
}
