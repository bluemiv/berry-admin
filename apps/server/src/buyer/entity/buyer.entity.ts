import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApproveMarketing } from '../../marketing/entity/approve-marketing.entity';
import { Order } from '../../order/entity/order.entity';

@Entity()
export class Buyer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  description: string;

  @OneToOne(() => ApproveMarketing, (approveMarketing) => approveMarketing.buyer)
  @JoinColumn()
  approveMarketing: ApproveMarketing;

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
