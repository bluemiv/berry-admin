import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductVersionService } from './product-version.service';
import { CreateProductVersionDTO } from './dto/create-product-version.dto';

@Controller('product-version')
export class ProductVersionController {
  constructor(private productVersionService: ProductVersionService) {}

  @Get('/:productId')
  async findAll(@Param('productId') productId) {
    const results = await this.productVersionService.findAllByProductId(productId);
    return {
      count: results.length,
      results,
    };
  }

  @Post('/:productId')
  async createVersion(@Body() createProductVersionDTO: CreateProductVersionDTO) {
    return this.productVersionService.createVersion(createProductVersionDTO);
  }
}
