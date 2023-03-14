import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "src/order/order.entity";
import { OrderService } from "src/order/order.service";
import { DMController } from "./deliveryman.controller";
import { DeliverymanEntity } from "./deliveryman.entity";
import { DMService } from "./deliveryman.service";


@Module({
    imports:[TypeOrmModule.forFeature([OrderEntity,DeliverymanEntity])],
    controllers: [DMController],
    providers: [DMService, OrderService],
  })
export class DMModule {}