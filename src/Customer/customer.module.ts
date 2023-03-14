import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { customerEntity } from "./CustomerEntities/customer.entity";
import { menuEntity } from "./CustomerEntities/menu.entity";
import { userEntity } from "../User/UserEntites/user.entity";
import { OrderedItemsEntity } from "./CustomerEntities/OrderedItems.entity";
import { CouponsEntity } from "./CustomerEntities/coupons.entity";
import { TrasnsactionsEntity } from "./CustomerEntities/transactions.entity";
import { DineInEntity } from "./CustomerEntities/dinein.entity";
import { TablesEntity } from "./CustomerEntities/tables.entity";
import { MenuModule } from "./Menu/menu.module";

@Module({
    imports:[TypeOrmModule.forFeature([customerEntity, userEntity, menuEntity, OrderedItemsEntity, CouponsEntity, TrasnsactionsEntity, DineInEntity, TablesEntity])],
    controllers:[CustomerController],
    providers:[CustomerService]
})
export class CustomerModule{}