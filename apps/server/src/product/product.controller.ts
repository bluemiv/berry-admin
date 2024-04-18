import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-buyer.dto';
import { ProductService } from './product.service';

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
    return this.productService.create(createProductDTO);
  }
}
