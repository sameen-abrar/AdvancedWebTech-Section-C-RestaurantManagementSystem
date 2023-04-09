import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "../customer.controller";
import { CustomerModule } from "../customer.module";
import { CustomerService } from "../customer.service";
import { customerEntity } from "../CustomerEntities/customer.entity";
import { menuEntity } from "../CustomerEntities/menu.entity";
import { OrderedItemsEntity } from "../CustomerEntities/OrderedItems.entity";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
// import { MenuController } from "./menu.controller";
// import { MenuService } from "./menu.service";
@Module({
    imports:[TypeOrmModule.forFeature([OrderedItemsEntity])],
    controllers:[CartController],
    providers:[CartService]
})
export class CartModule{}