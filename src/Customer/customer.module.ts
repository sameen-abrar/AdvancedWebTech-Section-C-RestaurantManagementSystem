import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { customerEntity } from './CustomerEntities/customer.entity';
import { menuEntity } from './CustomerEntities/menu.entity';
import { userEntity } from '../User/UserEntites/user.entity';
import { OrderedItemsEntity } from './CustomerEntities/OrderedItems.entity';
import { CouponsEntity } from './CustomerEntities/coupons.entity';
import { TrasnsactionsEntity } from './CustomerEntities/transactions.entity';
import { DineInEntity } from './CustomerEntities/dinein.entity';
import { TablesEntity } from './CustomerEntities/tables.entity';
import { MenuModule } from './Menu/menu.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MenuService } from './Menu/menu.service';
import { CartController } from './Cart/cart.controller';
import { CartModule } from './Cart/cart.module';
import { TransactionModule } from './transactions/transaction.module';
import { CouponsModule } from './coupons/coupons.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'sameenabrar13@gmail.com',
          pass: 'gdsbdbmlwaigejun',
        },
      },
    }),
    MenuModule,
    CartModule,
    TransactionModule,
    CouponsModule,
    TypeOrmModule.forFeature([
      customerEntity,
      userEntity,
      menuEntity,
      OrderedItemsEntity,
      CouponsEntity,
      TrasnsactionsEntity,
      DineInEntity,
      TablesEntity,
    ]),
  ],

  controllers: [CustomerController],
  providers: [CustomerService, MenuService],
})
export class CustomerModule {}
