import {
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

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Buyer, (buyer) => buyer.orders)
  buyer: Buyer;

  @OneToOne(() => ProductVersion, (productVersion) => productVersion.order)
  @JoinColumn()
  productVersion: ProductVersion;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
