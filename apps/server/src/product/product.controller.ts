import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  async findAll() {
    const results = await this.productService.findAll();
    return {
      count: results.length,
      results,
    };
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Post('/')
  create(@Body() createProductDTO: CreateProductDTO) {
    console.log(createProductDTO);
    return this.productService.create(createProductDTO);
  }
}
