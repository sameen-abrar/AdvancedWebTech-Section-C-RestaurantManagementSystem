import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DMInfo, DMUpdateInfo } from './deliveryman.dto';
import { DeliverymanEntity } from './deliveryman.entity';


@Injectable()
export class DMService {
  
    constructor(
        @InjectRepository(DeliverymanEntity)
        private DMRepo: Repository<DeliverymanEntity>,
      ) {}

      getDM(): any {
        return this.DMRepo.find();
      }    

      addDM(dm:DMInfo):any {
        const dminfo = new DeliverymanEntity()
        dminfo.dm_name = dm.dm_name;
        dminfo.dm_age = dm.dm_age;
        dminfo.dm_gender = dm.dm_gender;
        dminfo.dm_address = dm.dm_address;
        dminfo.dm_salary = dm.dm_salary;
        dminfo.dm_email = dm.dm_email;
        dminfo.dm_contact = dm.dm_contact; 
        dminfo.dm_vehicleno = dm.dm_vehicleno; 
        dminfo.manager = dm.m_id;    
        return this.DMRepo.save(dminfo);
      }
    
      modifyDM(dm_name, dm_age, dm_gender, dm_address,dm_salary,dm_email,dm_contact,dm_vehicleno,m_id,dm_id): any {
        return this.DMRepo.update(dm_id,{dm_name:dm_name,dm_age:dm_age,dm_gender:dm_gender,dm_address:dm_address,dm_salary:dm_salary,dm_email:dm_email,dm_contact:dm_contact,dm_vehicleno:dm_vehicleno,manager:m_id});
      }
    
      updateDM(dm:DMUpdateInfo,dm_id):any {
        return this.DMRepo.update(dm_id,dm);
           }
    
      removeDM(dm_id):any {
        
            return this.DMRepo.delete(dm_id);
        }
    
    
      findDM(query): any{
        return this.DMRepo.findOneBy({dm_id:query.dm_id,dm_name:query.dm_name });
      }

    
}