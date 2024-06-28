import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductVersion } from './product-version.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductVersion])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
