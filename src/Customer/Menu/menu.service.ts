import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { menuEntity } from '../CustomerEntities/menu.entity';
import { MenuDTO } from '../CustomerDTOs/menuDTO.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(menuEntity)
    private MenuRepo: Repository<menuEntity>,
  ) {}

  getById(id: number): any {
    // throw new Error("Method not implemented.");
    return this.MenuRepo.findOneBy({ id });
  }
  getAll(): any {
    return this.MenuRepo.find();
  }
  async add(user: MenuDTO): Promise<menuEntity> {
    // throw new Error("Method not implemented.");

    var newUser = new menuEntity();

    // newUser.UserName = user.UserName
    // newUser.Registration_Date = new Date();
    // newUser.Type = user.Type;

    // // newUser.Password = user.Password

    // const salt = await bcrypt.genSalt();
    // const hashedpass = await bcrypt.hash(user.Password, salt);
    // newUser.Password= hashedpass;
    // return this.MenuRepo.save(ne);

    const add = this.MenuRepo.save(user);

    return add;

    // return this.MenuRepo.insert(obj);
  }
  async delete(id: number): Promise<any> {
    return this.MenuRepo.delete(id);
  }
  update(id: number, user: MenuDTO): Promise<UpdateResult> {
    // throw new Error("Method not implemented.");
    const currUser = this.getById(id);

    currUser.Food_Name = user.Food_Name;
    currUser.Description = user.Description;
    currUser.Ingredients = user.Ingredients;
    currUser.Price = user.Price;
    currUser.SpiceLevel = user.SpiceLevel;
    currUser.Type = user.Type;

    return this.MenuRepo.update(id, currUser);
  }
  getMenuWithItems(): any {
    console.log('here');
    return this.MenuRepo.find({
      relations: {
        orderedItems: true,
      },
    });
  }
}
