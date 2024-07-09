import { Column, Entity, OneToMany } from 'typeorm';
import { CommonEntity } from '../../common/entities/common-entity';
import { TradeHistory } from '../../trade-history/entities/trade-history.entity';

@Entity({ orderBy: { id: 'DESC' } })
export class Trade extends CommonEntity {
  @Column({ nullable: false })
  symbol: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  startSeed: number;

  @Column({ nullable: true })
  goalSeed: number;

  @OneToMany(
    () => TradeHistory,
    (tradeHistory: TradeHistory) => tradeHistory.trade,
    {
      cascade: true,
    },
  )
  tradeHistory: TradeHistory[];
}
