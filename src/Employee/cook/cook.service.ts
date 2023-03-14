import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CookInfo, CookUpdateInfo } from './cook.dto';
import { CookEntity } from './cook.entity';

@Injectable()
export class CookService {
  
    constructor(
        @InjectRepository(CookEntity)
        private CookRepo: Repository<CookEntity>,
      ) {}

      getCook(): any {
        return this.CookRepo.find();
      }    

      addCook(cook:CookInfo):any {
        const cookinfo = new CookEntity()
        cookinfo.c_name = cook.c_name;
        cookinfo.c_age = cook.c_age;
        cookinfo.c_gender = cook.c_gender;
        cookinfo.c_address = cook.c_address;
        cookinfo.c_salary = cook.c_salary;
        cookinfo.c_email = cook.c_email;
        cookinfo.c_contact = cook.c_contact; 
        cookinfo.manager = cook.m_id;    
        return this.CookRepo.save(cookinfo);
      }
    
      modifyCook(c_name, c_age, c_gender, c_address,c_salary,c_email,c_contact,m_id,c_id): any {
        return this.CookRepo.update(c_id,{c_name:c_name,c_age:c_age,c_gender:c_gender,c_address:c_address,c_salary:c_salary,c_email:c_email,c_contact:c_contact,manager:m_id});
      }
    
      updateCook(cook:CookUpdateInfo,c_id):any {
        return this.CookRepo.update(c_id,cook);
           }
    
      removeCook(c_id):any {
        
            return this.CookRepo.delete(c_id);
        }
    
    
      findCook(query): any{
        return this.CookRepo.findOneBy({c_id:query.c_id,c_name:query.c_name });
      }
}