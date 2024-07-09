import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonEntity } from '../../common/entities/common-entity';
import { Trade } from '../../trade/entities/trade.entity';

@Entity({ orderBy: { id: 'DESC' } })
export class TradeHistory extends CommonEntity {
  @Column({ nullable: false })
  currentSeed: number;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Trade, (trade) => trade.tradeHistory)
  trade: Trade;
}
