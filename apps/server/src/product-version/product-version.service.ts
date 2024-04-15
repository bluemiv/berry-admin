import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductVersion } from './entity/product-version.entity';

@Injectable()
export class ProductVersionService {
  constructor(
    @InjectRepository(ProductVersion)
    private productVersionRepository: Repository<ProductVersion>,
  ) {}

  findAll() {
    return this.productVersionRepository.find();
  }

  findOne(uuid: string) {
    return this.productVersionRepository.findOneBy({ id: uuid });
  }

  remove(uuid: string) {
    return this.productVersionRepository.delete(uuid);
  }
}
