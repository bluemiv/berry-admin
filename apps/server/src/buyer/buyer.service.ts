import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Buyer } from './entity/buyer.entity';

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
