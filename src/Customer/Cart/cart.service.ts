import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { menuEntity } from "../CustomerEntities/menu.entity";
// import { CarDTO } from "../CustomerDTOs/menuDTO.dto";
import { OrderedItemsEntity } from "../CustomerEntities/OrderedItems.entity";
import { OrderedItemsDTO } from "../CustomerDTOs/OrderedItemsDTO.dto";

@Injectable()
export class CartService {
    
    constructor(
        @InjectRepository( OrderedItemsEntity)
        private CartRepo: Repository< OrderedItemsEntity>
      ) {}
    
    getById(id: number): any {
        // throw new Error("Method not implemented.");
        return this.CartRepo.findOneBy({id});
    }
    getAll(): any {
        // throw new Error("Method not implemented.");

        // console.log(typeof(this.CartRepo.find()));
        // console.log(this.CartRepo.find());
        return this.CartRepo.find()
        
    }
    async add(user: OrderedItemsDTO): Promise<OrderedItemsEntity> {
        // throw new Error("Method not implemented.");

        var newUser = new menuEntity();

        const add = this.CartRepo.save(user)

        return add;

        // return this.CartRepo.insert(obj);
    }
    async delete(id: number): Promise<any> 
    {
        return this.CartRepo.delete(id);
    }
    update(id:number, user: OrderedItemsDTO): Promise<UpdateResult> {
        // throw new Error("Method not implemented.");
        const currUser = this.getById(id);

        // currUser.Food_Name = user.Food_Name
        // currUser.Description = user.Description
        // currUser.Ingredients = user.Ingredients;
        // currUser.Price = user.Price;
        // currUser.SpiceLevel = user.SpiceLevel;
        // currUser.Type = user.Type;

        return this.CartRepo.update(id, currUser);

    }
    getMenuWithCart(): any
    {
        console.log("here")
        return this.CartRepo.find({
            relations: 
            {
                menu:true
            }
        })
    }
    getCustomerWithCartId(id): any
    {
        console.log("here")
        return this.CartRepo.find({
            where:{customerId:id},
            relations: 
            {
                customer:true,
                menu:true
            }
        })
    }
    
}