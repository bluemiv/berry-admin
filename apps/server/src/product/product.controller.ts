import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { CreateProductVersionDto } from './dto/create-product-version.dto';
import { FindProductVersionDto } from './dto/find-product-version.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll(@Query() findProductDto: FindProductDto) {
    return this.productService.findAll(findProductDto);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get(':id')
  find(@Param('id') productId: number) {
    return this.productService.find(productId);
  }

  @Get(':id/version')
  findAllVersions(
    @Param('id') productId: number,
    @Query() findProductVersionDto: FindProductVersionDto,
  ) {
    return this.productService.findAllVersions(
      productId,
      findProductVersionDto,
    );
  }

  @Post(':id/version')
  createVersion(
    @Param('id') productId: number,
    @Body() createProductVersionDto: CreateProductVersionDto,
  ) {
    return this.productService.createVersion(
      productId,
      createProductVersionDto,
    );
  }
}
