import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MenuEntity } from "src/menu/menu.entity";
import { MenuService } from "src/menu/menu.service";
import { OrderEntity } from "src/order/order.entity";
import { OrderService } from "src/order/order.service";
import { TableEntity } from "src/table/table.entity";
import { TableService } from "src/table/table.service";
import { WaiterController} from "./waiter.controller";
import { WaiterEntity } from "./waiter.entity";
import { WaiterService } from "./waiter.service";

@Module({
    imports:[TypeOrmModule.forFeature([OrderEntity,WaiterEntity,MenuEntity,TableEntity])],
    controllers: [WaiterController],
    providers: [WaiterService, OrderService, MenuService, TableService],
  })
export class WaiterModule {}