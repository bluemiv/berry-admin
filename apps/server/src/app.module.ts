import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeormModuleOptions } from './config/configuration';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { TradeModule } from './trade/trade.module';
import { TradeHistoryModule } from './trade-history/trade-history.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env', '.env.local'] }),
    TypeOrmModule.forRoot(getTypeormModuleOptions()),
    UserModule,
    ProductModule,
    OrderModule,
    TradeModule,
    TradeHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
