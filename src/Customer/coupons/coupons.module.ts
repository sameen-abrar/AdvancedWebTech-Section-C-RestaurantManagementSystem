import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from '../customer.controller';
import { CustomerModule } from '../customer.module';
import { CustomerService } from '../customer.service';
import { customerEntity } from '../CustomerEntities/customer.entity';
import { menuEntity } from '../CustomerEntities/menu.entity';
import { OrderedItemsEntity } from '../CustomerEntities/OrderedItems.entity';
import { CouponsController } from './coupons.controller';
import { CouponsService } from './coupons.service';
import { CouponsEntity } from '../CustomerEntities/coupons.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CouponsEntity])],
  controllers: [CouponsController],
  providers: [CouponsService],
})
export class CouponsModule {}
