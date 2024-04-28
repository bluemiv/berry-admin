import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Buyer } from './entity/buyer.entity';
import { CreateBuyerDTO } from './dto/create-buyer.dto';

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

  create(createBuyerDTO: CreateBuyerDTO) {
    const createdData = this.buyerRepository.create(createBuyerDTO);
    return this.buyerRepository.save(createdData);
  }

  remove(uuid: string) {
    return this.buyerRepository.delete(uuid);
  }
}
