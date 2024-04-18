import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductVersionController } from './product-version.controller';
import { ProductVersionService } from './product-version.service';
import { ProductVersion } from './entity/product-version.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductVersion])],
  controllers: [ProductVersionController],
  providers: [ProductVersionService],
})
export class ProductVersionModule {}
