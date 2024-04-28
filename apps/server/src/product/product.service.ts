import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { CreateProductDTO } from './dto/create-product.dto';

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
    return this.productRepository.findOne({ where: { id: uuid }, relations: ['productVersions'] });
  }

  create(createProductDTO: CreateProductDTO) {
    const createdData = this.productRepository.create(createProductDTO);
    return this.productRepository.save(createdData);
  }

  remove(uuid: string) {
    return this.productRepository.delete(uuid);
  }
}
