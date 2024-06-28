import { Entity, Column, OneToMany } from 'typeorm';
import { CommonEntity } from '../common/entities/CommonEntity';
import { Order } from '../order/order.entity';

@Entity()
export class User extends CommonEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  email: string;

  @OneToMany(() => Order, (order) => order.user, { cascade: true })
  orders: Order[];
}
