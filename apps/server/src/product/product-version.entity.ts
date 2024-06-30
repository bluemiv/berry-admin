import { CommonEntity } from '../common/entities/common-entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity({ orderBy: { id: 'DESC' } })
export class ProductVersion extends CommonEntity {
  @Column({ nullable: false })
  version: string;

  @Column({ nullable: true, type: 'timestamp' })
  releaseAt: Date;

  @ManyToOne(() => Product, (product) => product.versions)
  product: Product;
}
