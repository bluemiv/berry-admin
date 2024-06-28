import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonEntity } from '../common/entities/CommonEntity';
import { User } from '../user/user.entity';

@Entity()
export class Order extends CommonEntity {
  @Column()
  price: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
