import { Module } from '@nestjs/common';
import { TradeController } from './trade.controller';
import { TradeService } from './trade.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trade } from './entities/trade.entity';
import { TradeHistory } from '../trade-history/entities/trade-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trade, TradeHistory])],
  controllers: [TradeController],
  providers: [TradeService],
})
export class TradeModule {}
