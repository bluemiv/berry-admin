import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Buyer } from '../../buyer/entity/buyer.entity';

@Entity()
export class ApproveMarketing {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Buyer, (buyer) => buyer.approveMarketing)
  buyer: Buyer;

  @Column()
  isApprove: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
