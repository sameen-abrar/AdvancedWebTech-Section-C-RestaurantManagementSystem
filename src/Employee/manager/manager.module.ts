import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/order/order.entity';
import { OrderService } from 'src/order/order.service';
import { CookEntity } from '../cook/cook.entity';
import { CookModule } from '../cook/cook.module';
import { CookService } from '../cook/cook.service';
import { DMController } from '../deliveryman/deliveryman.controller';
import { DeliverymanEntity } from '../deliveryman/deliveryman.entity';
import { DMModule } from '../deliveryman/deliveryman.module';
import { DMService } from '../deliveryman/deliveryman.service';
import { WaiterEntity } from '../waiter/waiter.entity';
import { WaiterModule } from '../waiter/waiter.module';
import { WaiterService } from '../waiter/waiter.service';
import { ManagerController } from './manager.controller';
import { ManagerEntity } from './manager.entity';
import { ManagerService } from './manager.service';


@Module({
  imports:
  [WaiterModule, DMModule, CookModule, 
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
                 port: 465,
                 ignoreTLS: true,
                 secure: true,
                 auth: {
                     user: 'db9208615@gmail.com',
                     pass: 'sfazectxrrtmnrxl'
                 },
                }
    }),
    TypeOrmModule.forFeature([WaiterEntity, ManagerEntity, CookEntity, DeliverymanEntity, OrderEntity])],
  controllers: [ManagerController, DMController],
  providers: [ManagerService, WaiterService, CookService, DMService, OrderService],
})
export class ManagerModule {}