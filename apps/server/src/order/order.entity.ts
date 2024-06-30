import { Column, Entity, JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { CommonEntity } from '../common/entities/common-entity';
import { Product } from '../product/product.entity';
import { ProductVersion } from '../product/product-version.entity';

@Entity({ orderBy: { id: 'DESC' } })
export class Order extends CommonEntity {
  @Column()
  price: number;

  @ManyToOne(() => Product, (product) => product.orders)
  @JoinTable()
  product: Product;

  @ManyToOne(() => ProductVersion, (productVersion) => productVersion.orders)
  @JoinTable()
  productVersion: ProductVersion;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
