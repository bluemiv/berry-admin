import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductVersion } from './entity/product-version.entity';
import { ProductService } from '../product/product.service';

@Injectable()
export class ProductVersionService {
  constructor(
    @InjectRepository(ProductVersion)
    private productVersionRepository: Repository<ProductVersion>,
    private productService: ProductService,
  ) {}

  findAll() {
    return this.productVersionRepository.find();
  }

  async findAllByProductId(productId: string) {
    const product = await this.productService.findOne(productId);
    return this.productVersionRepository.findBy({ product });
  }

  remove(uuid: string) {
    return this.productVersionRepository.delete(uuid);
  }
}
