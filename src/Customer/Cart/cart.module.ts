import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderedItemsEntity } from '../CustomerEntities/OrderedItems.entity';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { MenuModule } from '../Menu/menu.module';
import { MenuService } from '../Menu/menu.service';
@Module({
  imports: [TypeOrmModule.forFeature([OrderedItemsEntity]), MenuModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
