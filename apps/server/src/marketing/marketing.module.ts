import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketingController } from './marketing.controller';
import { MarketingService } from './marketing.service';
import { ApproveMarketing } from './entity/approve-marketing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApproveMarketing])],
  controllers: [MarketingController],
  providers: [MarketingService],
})
export class MarketingModule {}
