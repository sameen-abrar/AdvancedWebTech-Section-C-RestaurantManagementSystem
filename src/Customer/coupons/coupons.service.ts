import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { menuEntity } from "../CustomerEntities/menu.entity";
// import { CarDTO } from "../CustomerDTOs/menuDTO.dto";
import { OrderedItemsEntity } from "../CustomerEntities/OrderedItems.entity";
// import { OrderedItemsDTO } from "../CustomerDTOs/OrderedItemsDTO.dto";
// import { CouponsDTO } from "../CustomerDTOs/couponsDTO.dto";
import { CouponsEntity } from "../CustomerEntities/coupons.entity";
import { CouponsDTO } from "../CustomerDTOs/couponsDTO.sto";

@Injectable()
export class CouponsService {
    
    constructor(
        @InjectRepository( CouponsEntity)
        private CouponsRepo: Repository< CouponsEntity>
      ) {}
    
    getById(id: number): any {
        // throw new Error("Method not implemented.");
        return this.CouponsRepo.findOneBy({id});
    }
    getAll(): any {
        // throw new Error("Method not implemented.");

        // console.log(typeof(this.CouponsRepo.find()));
        // console.log(this.CouponsRepo.find());
        return this.CouponsRepo.find()
        
    }
    async add(user: CouponsDTO): Promise<CouponsEntity> {
        // throw new Error("Method not implemented.");

        var newUser = new menuEntity();

        const add = this.CouponsRepo.save(user)

        return add;

        // return this.CouponsRepo.insert(obj);
    }
    async delete(id: number): Promise<any> 
    {
        return this.CouponsRepo.delete(id);
    }
    update(id:number, user: CouponsDTO): Promise<UpdateResult> {
        // throw new Error("Method not implemented.");
        const currUser = this.getById(id);

        // currUser.Food_Name = user.Food_Name
        // currUser.Description = user.Description
        // currUser.Ingredients = user.Ingredients;
        // currUser.Price = user.Price;
        // currUser.SpiceLevel = user.SpiceLevel;
        // currUser.Type = user.Type;

        return this.CouponsRepo.update(id, currUser);

    }
    getTransactionsWithCoupons(): any
    {
        console.log("here")
        return this.CouponsRepo.find({
            relations: 
            {
                transactions:true
            }
        })
    }
    getTransactionsWithCouponID(id): any
    {
        console.log("here")
        return this.CouponsRepo.find({
            where:{id:id},
            relations: 
            {
                transactions:true
            }
        })
    }
    
}