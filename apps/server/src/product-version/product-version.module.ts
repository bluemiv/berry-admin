import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductVersionController } from './product-version.controller';
import { ProductVersionService } from './product-version.service';
import { ProductVersion } from './entity/product-version.entity';
import { Product } from '../product/entity/product.entity';
import { ProductService } from '../product/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductVersion])],
  controllers: [ProductVersionController],
  providers: [ProductService, ProductVersionService],
})
export class ProductVersionModule {}
