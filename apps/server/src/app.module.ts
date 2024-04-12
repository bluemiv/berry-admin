import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmModuleOptions } from './config';
import { BuyerModule } from './buyer/buyer.module';
import { MarketingModule } from './marketing/marketing.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { ProductVersionModule } from './product-version/product-version.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmModuleOptions), BuyerModule, MarketingModule, OrderModule, ProductModule, ProductVersionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
