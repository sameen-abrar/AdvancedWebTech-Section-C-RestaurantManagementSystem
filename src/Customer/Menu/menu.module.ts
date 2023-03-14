import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "../customer.controller";
import { CustomerModule } from "../customer.module";
import { CustomerService } from "../customer.service";
import { customerEntity } from "../CustomerEntities/customer.entity";
import { menuEntity } from "../CustomerEntities/menu.entity";
import { MenuController } from "./menu.controller";
import { MenuService } from "./menu.service";
@Module({
    imports:[TypeOrmModule.forFeature([menuEntity]),],
    controllers:[MenuController],
    providers:[MenuService]
})
export class MenuModule{}