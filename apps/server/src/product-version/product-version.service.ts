import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductVersion } from './entity/product-version.entity';
import { ProductService } from '../product/product.service';
import { CreateProductVersionDTO } from './dto/create-product-version.dto';

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

  async createVersion(createProductVersionDTO: CreateProductVersionDTO) {
    const product = await this.productService.findOne(createProductVersionDTO.productId);
    const createdData = this.productVersionRepository.create({
      version: createProductVersionDTO.version,
      product,
      isDisabled: false,
    });
    return this.productVersionRepository.save(createdData);
  }

  remove(uuid: string) {
    return this.productVersionRepository.delete(uuid);
  }
}
