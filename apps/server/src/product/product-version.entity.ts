import { CommonEntity } from '../common/entities/common-entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductVersion extends CommonEntity {
  @Column({ nullable: false })
  version: string;

  @ManyToOne(() => Product, (product) => product.versions)
  product: Product;
}
