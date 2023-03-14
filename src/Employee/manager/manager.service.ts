import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ManagerInfo } from './manager.dto';
import { ManagerEntity } from './manager.entity';
import { MailerService } from '@nestjs-modules/mailer/dist';


@Injectable()
export class ManagerService {

  constructor(
    @InjectRepository(ManagerEntity)
    private ManagerRepo: Repository<ManagerEntity>,
    private mailerService: MailerService
  ) {}

  getManager(): any {
    return this.ManagerRepo.find();
  }    

  async signup(manager) {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(manager.m_password, salt);
    manager.m_password= hashed;
    return this.ManagerRepo.save(manager);
    }
    

  /*insertManager(manager:ManagerInfo):any {
        const managerinfo = new ManagerEntity()
        managerinfo.m_name = manager.m_name;
        managerinfo.m_age = manager.m_age;
        managerinfo.m_gender = manager.m_gender;
        managerinfo.m_address = manager.m_address;
        managerinfo.m_salary = manager.m_salary;
        managerinfo.m_email = manager.m_email;
        managerinfo.m_contact = manager.m_contact;
        managerinfo.m_password = manager.m_password;    
        return this.ManagerRepo.save(managerinfo);
      }

      removeManager(m_id,m_email):any {
        return this.ManagerRepo.delete({m_id:m_id},{m_email:m_email});
    }*/

    async signin(manager){
      console.log(manager.m_password);
        const mydata= await this.ManagerRepo.findOneBy({m_email: manager.m_email});
        const isMatch= await bcrypt.compare(manager.m_password, mydata.m_password);
        if(isMatch) {
        return 1;
        }
        else {
            return 0;
        }
        
      }
      uploadProfilePic(m_email,manager): any {
        this.ManagerRepo.update(m_email,manager);
        
       return  (this.ManagerRepo.update(m_email,{m_profile:manager.m_profile})); 
     }
     
      getWaitersByManagerID(m_id):any {
        return this.ManagerRepo.find({ 
                where: {m_id:m_id},
            relations: {
                waiters: true,
            },
         });
      }

      async sendEmail(mydata){
        return   await this.mailerService.sendMail({
               to: mydata.email,
               subject: mydata.subject,
               text: mydata.text, 
             });
       
       }
}