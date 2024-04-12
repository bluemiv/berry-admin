import { Module } from '@nestjs/common';
import { ProductVersionController } from './product-version.controller';
import { ProductVersionService } from './product-version.service';

@Module({
  controllers: [ProductVersionController],
  providers: [ProductVersionService]
})
export class ProductVersionModule {}
