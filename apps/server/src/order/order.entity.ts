import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { CommonEntity } from '../common/entities/common-entity';

@Entity()
export class Order extends CommonEntity {
  @Column()
  price: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
