import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  findOne(uuid: string) {
    return this.productRepository.findOneBy({ id: uuid });
  }

  remove(uuid: string) {
    return this.productRepository.delete(uuid);
  }
}
