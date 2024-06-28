import { Entity, Column, OneToMany } from 'typeorm';
import { Order } from '../order/order.entity';
import { CommonEntity } from '../common/entities/common-entity';

@Entity({ orderBy: { id: 'DESC' } })
export class User extends CommonEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  email: string;

  @OneToMany(() => Order, (order) => order.user, { cascade: true })
  orders: Order[];
}
