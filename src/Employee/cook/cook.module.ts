import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "src/order/order.entity";
import { OrderService } from "src/order/order.service";
import { CookController } from "./cook.controller";
import { CookEntity } from "./cook.entity";
import { CookService } from "./cook.service";

@Module({
    imports:[TypeOrmModule.forFeature([OrderEntity,CookEntity])],
    controllers: [CookController],
    providers: [CookService, OrderService],
  })
export class CookModule {}