import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../product/entity/product.entity';
import { Order } from '../../order/entity/order.entity';

@Entity()
export class ProductVersion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  version: string;

  @Column()
  isDisabled: boolean;

  @OneToOne(() => Order, (order) => order.productVersion)
  order: Order;

  @ManyToOne(() => Product, (product) => product.productVersions)
  product: Product;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
