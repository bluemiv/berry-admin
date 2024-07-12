import { Like, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trade } from './entities/trade.entity';
import { CreateTradeDto } from './dto/create-trade.dto';
import { FindTradeDto } from './dto/find-trade.dto';
import { TradeHistory } from '../trade-history/entities/trade-history.entity';
import { FindTradeHistoryDto } from './dto/find-trade-history.dto';
import { CreateTradeHistoryDto } from '../trade-history/dto/create-trade-history.dto';
import { UpdateTradeDto } from './dto/update-trade.dto';

@Injectable()
export class TradeService {
  constructor(
    @InjectRepository(Trade) private tradeRepository: Repository<Trade>,
    @InjectRepository(TradeHistory)
    private tradeHistoryRepository: Repository<TradeHistory>,
  ) {}

  async createTrade(createTradeDto: CreateTradeDto) {
    const trade = this.tradeRepository.create(createTradeDto);
    return this.tradeRepository.save(trade);
  }

  async updateTrade(tradeId: number, updateTradeDto: UpdateTradeDto) {
    await this.tradeRepository.update(tradeId, updateTradeDto);
    return this.tradeRepository.findOneBy({ id: tradeId });
  }

  async findAll(findTradeDto: FindTradeDto) {
    const { limit, page, title } = findTradeDto;

    const where = {};
    if (!!title) {
      where['title'] = Like(`%${title}%`);
    }

    const [data, count] = await this.tradeRepository.findAndCount({
      where,
      order: { id: 'DESC' },
      take: limit,
      skip: (page - 1) * limit,
    });
    return { data, count };
  }

  find(tradeId: number) {
    return this.tradeRepository.findOneBy({ id: tradeId });
  }

  async createTradeHistory(
    tradeId: number,
    createTradeHistoryDto: CreateTradeHistoryDto,
  ) {
    const tradeHistory = this.tradeHistoryRepository.create({
      trade: { id: tradeId },
      ...createTradeHistoryDto,
    });
    return this.tradeHistoryRepository.save(tradeHistory);
  }

  async findAllHistory(
    tradeId: number,
    findTradeHistoryDto: FindTradeHistoryDto,
  ) {
    const { limit, page } = findTradeHistoryDto;

    const [data, count] = await this.tradeHistoryRepository.findAndCount({
      where: { trade: { id: tradeId } },
      order: { id: 'DESC' },
      take: limit,
      skip: (page - 1) * limit,
    });
    return { data, count };
  }
}
