import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyerController } from './buyer.controller';
import { BuyerService } from './buyer.service';
import { Buyer } from './entity/buyer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Buyer])],
  controllers: [BuyerController],
  providers: [BuyerService],
})
export class BuyerModule {}
