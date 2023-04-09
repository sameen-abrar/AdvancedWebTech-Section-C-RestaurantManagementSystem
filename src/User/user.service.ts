import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import IRepo from './user.repo';
import { UserDTO } from './UserDTOs/user.dto';
import { userEntity } from './UserEntites/user.entity';
import * as bcrypt from 'bcrypt';
import { CustomerService } from 'src/Customer/customer.service';
import { customerEntity } from 'src/Customer/CustomerEntities/customer.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(userEntity)
    private UserRepo: Repository<userEntity>,
    @InjectRepository(customerEntity)
    private CustomerRepo: Repository<customerEntity>,

    private customerService: CustomerService,
  ) {}

  getById(id: number): any {
    // throw new Error("Method not implemented.");
    return this.UserRepo.findOneBy({ id });
  }
  getAll(): any {
    // throw new Error("Method not implemented.");

    // console.log(typeof(this.UserRepo.find()));
    // console.log(this.UserRepo.find());
    return this.UserRepo.find();
  }
  async add(user: UserDTO): Promise<userEntity> {
    // throw new Error("Method not implemented.");

    const newUser = new userEntity();

    newUser.UserName = user.UserName;
    newUser.Registration_Date = new Date();
    newUser.Type = user.Type;

    // newUser.Password = user.Password

    const salt = await bcrypt.genSalt();
    const hashedpass = await bcrypt.hash(user.Password, salt);
    newUser.Password = hashedpass;
    // return this.UserRepo.save(ne);

    const add = this.UserRepo.save(newUser);

    return add;

    // return this.UserRepo.insert(obj);
  }
  async delete(id: number): Promise<any> {
    // throw new Error("Method not implemented.");

    const u = await this.CustomerRepo.findOneBy({ userId: id });
    const a = await this.customerService.delete(u.id);

    if (a) {
      return this.UserRepo.delete(id);
    }
    return 0;
  }
  update(id: number, user: UserDTO): Promise<UpdateResult> {
    // throw new Error("Method not implemented.");
    const currUser = this.getById(id);

    currUser.UserName = user.UserName;
    currUser.Registration_Date = new Date();
    currUser.Password = user.Password;

    return this.UserRepo.update(id, currUser);
  }
  getUserWithCustomer(): any {
    console.log('here');
    return this.UserRepo.find({
      relations: {
        customer: true,
      },
    });
  }
  
  getCustomerWithUserId(id) {
    console.log('here');
    return this.UserRepo.find({
      where: { id: id },
      relations: {
        customer: true,
      },
    });
  }

  async Login(user: UserDTO) {
    console.log(user.Password);
    const mydata = await this.UserRepo.findOneBy({ UserName: user.UserName });
    const isMatch = await bcrypt.compare(user.Password, mydata.Password);
    if (isMatch) {
      console.log('service: ', mydata);
      const user = this.UserRepo.find({
        where: { id: mydata.id },
        relations: {
          customer: true,
        },
      });
      return user;
    }
    // else if(user.Password == null)
    // {
    //     return ({message: "cant read pass"});

    // }
    else {
      return null;
    }
  }
}
