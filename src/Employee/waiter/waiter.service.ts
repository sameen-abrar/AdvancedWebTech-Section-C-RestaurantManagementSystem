import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WaiterInfo, WaiterUpdateInfo } from './waiter.dto';
import { WaiterEntity } from './waiter.entity';

@Injectable()
export class WaiterService {

    constructor(
        @InjectRepository(WaiterEntity)
        private WaiterRepo: Repository<WaiterEntity>,
      ) {}

      getWaiter(): any {
        return this.WaiterRepo.find();
      }    

      addWaiter(waiter:WaiterInfo):any {
        const waiterinfo = new WaiterEntity()
        waiterinfo.w_name = waiter.w_name;
        waiterinfo.w_age = waiter.w_age;
        waiterinfo.w_gender = waiter.w_gender;
        waiterinfo.w_address = waiter.w_address;
        waiterinfo.w_salary = waiter.w_salary;
        waiterinfo.w_email = waiter.w_email;
        waiterinfo.w_contact = waiter.w_contact; 
        waiterinfo.manager = waiter.m_id;    
        return this.WaiterRepo.save(waiterinfo);
      }
    
      modifyWaiter(w_name, w_age, w_gender, w_address,w_salary,w_email,w_contact,m_id,w_id): any {
        return this.WaiterRepo.update(w_id,{w_name:w_name,w_age:w_age,w_gender:w_gender,w_address:w_address,w_salary:w_salary,w_email:w_email,w_contact:w_contact,manager:m_id});
      }
    
      updateWaiter(waiter:WaiterUpdateInfo, w_id:any):any {
        return this.WaiterRepo.update(waiter,w_id);
           }
    
      removeWaiter(w_id):any {
            return this.WaiterRepo.delete(w_id);
        }
    
    
      findWaiter(query): any{
        return this.WaiterRepo.findOneBy({w_id:query.w_id,w_name:query.w_name });
      }

      getManagerByWaiterID(w_id):any {
        return this.WaiterRepo.find({ 
                where: {w_id:w_id},
            relations: {
                manager: true,
            },
         });
    }
    
}