import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { Order } from '../order/order.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Order) private orderRepository: Repository<Order>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const entity = this.userRepository.create(createUserDto);
    return this.userRepository.save(entity);
  }

  async findAll(findUserDto: FindUserDto) {
    const { page, limit, name, email } = findUserDto;

    const where = {};
    if (!!name) {
      where['name'] = Like(`%${name}%`);
    }
    if (!!email) {
      where['email'] = Like(`%${email}%`);
    }

    const [data, count] = await this.userRepository.findAndCount({
      where,
      take: limit,
      skip: (page - 1) * limit,
      relations: ['orders', 'orders.product', 'orders.productVersion'],
    });

    return { data, count };
  }
}
