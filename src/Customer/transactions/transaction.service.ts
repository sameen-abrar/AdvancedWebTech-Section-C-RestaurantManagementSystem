import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { menuEntity } from "../CustomerEntities/menu.entity";
// import { CarDTO } from "../CustomerDTOs/menuDTO.dto";
import { OrderedItemsEntity } from "../CustomerEntities/OrderedItems.entity";
// import { TrasnsactionsDTO } from "../CustomerDTOs/OrderedItemsDTO.dto";
import { TrasnsactionsEntity } from "../CustomerEntities/transactions.entity";
import { TrasnsactionsDTO } from "../CustomerDTOs/transactionsDTO.dto";

@Injectable()
export class TransactionService {
    
    constructor(
        @InjectRepository( TrasnsactionsEntity)
        private TransactionRepo: Repository< TrasnsactionsEntity>
      ) {}
    
    getById(id: number): any {
        // throw new Error("Method not implemented.");
        return this.TransactionRepo.findOneBy({id});
    }
    getAll(): any {
        // throw new Error("Method not implemented.");

        // console.log(typeof(this.TransactionRepo.find()));
        // console.log(this.TransactionRepo.find());
        return this.TransactionRepo.find()
        
    }
    async add(user: TrasnsactionsDTO): Promise<TrasnsactionsEntity> {
        // throw new Error("Method not implemented.");

        var newUser = new menuEntity();

        const add = this.TransactionRepo.save(user)

        return add;

        // return this.TransactionRepo.insert(obj);
    }
    async delete(id: number): Promise<any> 
    {
        return this.TransactionRepo.delete(id);
    }
    update(id:number, user: TrasnsactionsDTO): Promise<UpdateResult> {
        // throw new Error("Method not implemented.");
        const currUser = this.getById(id);

        // currUser.Food_Name = user.Food_Name
        // currUser.Description = user.Description
        // currUser.Ingredients = user.Ingredients;
        // currUser.Price = user.Price;
        // currUser.SpiceLevel = user.SpiceLevel;
        // currUser.Type = user.Type;

        return this.TransactionRepo.update(id, currUser);

    }
    // getMenuWithCart(): any
    // {
    //     console.log("here")
    //     return this.TransactionRepo.find({
    //         relations: 
    //         {
    //             orderedItems:true
    //         }
    //     })
    // }
    getCartWithTransactionId(id): any
    {
        console.log("here")
        return this.TransactionRepo.find({
            where:{id:id},
            relations: 
            {
                orderedItems:true
            }
        })
    }
    
}