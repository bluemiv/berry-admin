import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductVersionService } from './product-version.service';
import { CreateProductVersionDTO } from './dto/create-product-version.dto';

@Controller('product-version')
export class ProductVersionController {
  constructor(private productVersionService: ProductVersionService) {}

  @Post('/:productId')
  async createVersion(@Body() createProductVersionDTO: CreateProductVersionDTO) {
    return this.productVersionService.createVersion(createProductVersionDTO);
  }
}
