import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from '../customer.controller';
import { CustomerModule } from '../customer.module';
import { CustomerService } from '../customer.service';
import { customerEntity } from '../CustomerEntities/customer.entity';
import { menuEntity } from '../CustomerEntities/menu.entity';
import { OrderedItemsEntity } from '../CustomerEntities/OrderedItems.entity';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TrasnsactionsEntity } from '../CustomerEntities/transactions.entity';
// import { MenuController } from "./menu.controller";
// import { MenuService } from "./menu.service";
@Module({
  imports: [TypeOrmModule.forFeature([TrasnsactionsEntity])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
