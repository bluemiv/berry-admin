import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from '../user/user.entity';
import { NotFoundError } from 'rxjs';
import { ProductVersion } from '../product/product-version.entity';
import { Product } from '../product/product.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductVersion)
    private readonly productVersionRepository: Repository<ProductVersion>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const user = await this.userRepository.findOne({
        where: { id: createOrderDto.userId },
      });
      if (!user) {
        throw new NotFoundError(
          `User not found. user id: ${createOrderDto.userId}`,
        );
      }

      const product = await this.productRepository.findOne({
        where: { id: createOrderDto.productId },
      });
      if (!product) {
        throw new NotFoundError(
          `Product not found. product id: ${createOrderDto.productId}`,
        );
      }

      const productVersion = await this.productVersionRepository.findOne({
        where: { id: createOrderDto.productVersionId },
      });
      if (!productVersion) {
        throw new NotFoundError(
          `Product version not found. product version id: ${createOrderDto.productVersionId}`,
        );
      }

      const order = this.orderRepository.create({
        user,
        product,
        productVersion,
        orderAt: createOrderDto?.orderAt || new Date(),
        price: createOrderDto.price,
      });
      await queryRunner.manager.save(order);
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }

  delete(orderId: number) {
    return this.orderRepository.delete(orderId);
  }
}
