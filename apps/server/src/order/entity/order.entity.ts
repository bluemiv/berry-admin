import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Buyer } from '../../buyer/entity/buyer.entity';
import { ProductVersion } from '../../product-version/entity/product-version.entity';
import { TOrderStatus } from '../types';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  status: TOrderStatus;

  @ManyToOne(() => Buyer, (buyer) => buyer.orders)
  buyer: Buyer;

  @OneToOne(() => ProductVersion, (productVersion) => productVersion.order)
  @JoinColumn()
  productVersion: ProductVersion;

  @Column()
  refundAt: Date;

  @Column()
  cancelledAt: Date;

  @Column()
  selledAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
