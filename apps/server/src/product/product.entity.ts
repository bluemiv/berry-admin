import { CommonEntity } from '../common/entities/common-entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends CommonEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;
}
