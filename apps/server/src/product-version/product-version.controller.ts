import { Controller, Get, Param } from '@nestjs/common';
import { ProductVersionService } from './product-version.service';

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
}
