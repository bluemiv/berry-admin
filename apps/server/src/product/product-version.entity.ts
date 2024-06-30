import { CommonEntity } from '../common/entities/common-entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Product } from './product.entity';
import { Order } from '../order/order.entity';

@Entity({ orderBy: { id: 'DESC' } })
export class ProductVersion extends CommonEntity {
  @Column({ nullable: false })
  version: string;

  @Column({ nullable: true, type: 'timestamp' })
  releaseAt: Date;

  @ManyToOne(() => Product, (product) => product.versions)
  product: Product;

  @OneToMany(() => Order, (order) => order.productVersion)
  orders: Order[];
}
