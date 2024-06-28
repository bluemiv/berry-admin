import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Like, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const entity = this.productRepository.create(createProductDto);
    return this.productRepository.save(entity);
  }

  async findAll(findProductDto: FindProductDto) {
    const { limit, page, name, description } = findProductDto;

    const where = {};
    if (!!name) {
      where['name'] = Like(`%${name}%`);
    }
    if (!!description) {
      where['description'] = Like(`%${description}%`);
    }

    const [data, count] = await this.productRepository.findAndCount({
      where,
      take: limit,
      skip: (page - 1) * limit,
    });
    return { data, count };
  }
}
