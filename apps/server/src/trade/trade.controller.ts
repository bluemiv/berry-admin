import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateTradeDto } from './dto/create-trade.dto';
import { TradeService } from './trade.service';
import { FindTradeDto } from './dto/find-trade.dto';
import { FindTradeHistoryDto } from './dto/find-trade-history.dto';
import { CreateTradeHistoryDto } from '../trade-history/dto/create-trade-history.dto';
import { UpdateTradeDto } from './dto/update-trade.dto';

@Controller('trade')
export class TradeController {
  constructor(private tradeService: TradeService) {}

  @Post()
  create(@Body() createTradeDto: CreateTradeDto) {
    return this.tradeService.createTrade(createTradeDto);
  }

  @Get()
  findAll(@Query() findTradeDto: FindTradeDto) {
    return this.tradeService.findAll(findTradeDto);
  }

  @Get(':id')
  find(@Param('id') tradeId: number) {
    return this.tradeService.find(tradeId);
  }

  @Put(':id')
  update(@Param('id') tradeId: number, @Body() updateTradeDto: UpdateTradeDto) {
    return this.tradeService.updateTrade(tradeId, updateTradeDto);
  }

  @Post(':id/history')
  createHistory(
    @Param('id') tradeId: number,
    @Body() createTradeHistoryDto: CreateTradeHistoryDto,
  ) {
    return this.tradeService.createTradeHistory(tradeId, createTradeHistoryDto);
  }

  @Get(':id/history')
  findHistory(
    @Param('id') tradeId: number,
    @Query() findTradeHistoryDto: FindTradeHistoryDto,
  ) {
    return this.tradeService.findAllHistory(tradeId, findTradeHistoryDto);
  }
}
