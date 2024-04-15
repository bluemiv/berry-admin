import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entity/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  findAll() {
    return this.orderRepository.find();
  }

  findOne(uuid: string) {
    return this.orderRepository.findOneBy({ id: uuid });
  }

  remove(uuid: string) {
    return this.orderRepository.delete(uuid);
  }
}
