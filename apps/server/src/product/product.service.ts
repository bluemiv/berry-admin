import { NotFoundError } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Like, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ProductVersion } from './product-version.entity';
import { CreateProductVersionDto } from './dto/create-product-version.dto';
import { FindProductVersionDto } from './dto/find-product-version.dto';
import { UpdateProductVersionDto } from './dto/update-product-version.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(ProductVersion)
    private productVersionRepository: Repository<ProductVersion>,
  ) {}

  async find(productId: number) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      order: { versions: { id: 'DESC' } },
      relations: ['versions', 'versions.orders', 'orders'],
    });
    if (!product) {
      throw new NotFoundError(`Product not found. product id: ${productId}`);
    }
    return product;
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
      order: { id: 'DESC', versions: { id: 'DESC' } },
      take: limit,
      skip: (page - 1) * limit,
      relations: ['versions'],
    });
    return { data, count };
  }

  create(createProductDto: CreateProductDto) {
    const entity = this.productRepository.create(createProductDto);
    return this.productRepository.save(entity);
  }

  async findAllVersions(
    productId: number,
    findProductVersionDto: FindProductVersionDto,
  ) {
    const { limit, page } = findProductVersionDto;
    const [data, count] = await this.productVersionRepository.findAndCount({
      where: { product: { id: productId } },
      order: { id: 'DESC' },
      take: limit,
      skip: (page - 1) * limit,
      relations: ['product'],
    });
    return { data, count };
  }

  async createVersion(
    productId: number,
    createProductVersionDto: CreateProductVersionDto,
  ) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (!product) {
      throw new NotFoundError('Product not found');
    }
    const version = this.productVersionRepository.create({
      product,
      ...createProductVersionDto,
    });
    return this.productVersionRepository.save(version);
  }

  async releaseVersion(
    versionId: number,
    updateProductVersionDto: UpdateProductVersionDto,
  ) {
    const productVersion = await this.productVersionRepository.findOne({
      where: { id: versionId },
    });
    if (!productVersion) {
      throw new NotFoundError(
        `Product version not found. version id: ${versionId}`,
      );
    }
    const { releaseAt } = updateProductVersionDto;
    productVersion.releaseAt = releaseAt;
    return this.productVersionRepository.save(productVersion);
  }
}
