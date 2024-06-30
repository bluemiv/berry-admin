import { CommonEntity } from '../common/entities/common-entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ProductVersion } from './product-version.entity';
import { Order } from '../order/order.entity';

@Entity({ orderBy: { id: 'DESC' } })
export class Product extends CommonEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => ProductVersion, (productVersion) => productVersion.product, {
    cascade: true,
  })
  versions: ProductVersion[];

  @OneToMany(() => Order, (order) => order.product)
  orders: Order[];
}
