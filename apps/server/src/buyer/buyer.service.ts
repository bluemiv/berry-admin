import { Injectable } from '@nestjs/common';
import { Buyer } from './entity/buyer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BuyerService {
  constructor(
    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,
  ) {}

  findAll() {
    return this.buyerRepository.find();
  }

  findOne(uuid: string) {
    return this.buyerRepository.findOneBy({ id: uuid });
  }

  remove(uuid: string) {
    return this.buyerRepository.delete(uuid);
  }
}
