import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { User } from '../user/user.entity';
import { Product } from '../product/product.entity';
import { ProductVersion } from '../product/product-version.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, Product, ProductVersion])],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
