import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuList, MenuUpdateList } from './menu.dto';
import { MenuEntity } from './menu.entity';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(MenuEntity)
        private MenuRepo: Repository<MenuEntity>,
      ) {}

    getMenu(): any {
        return this.MenuRepo.find();
      }    

    addMenu(menu:MenuList):any {
        const menuinfo = new MenuEntity()
        menuinfo.m_name = menu.m_name;
        menuinfo.m_type = menu.m_type;
        menuinfo.m_price = menu.m_price;
        menuinfo.m_availability = menu.m_availability;
        menuinfo.waiter = menu.w_id;     
        return this.MenuRepo.save(menuinfo);
      }

    modifyMenu(m_name, m_type, m_price, m_availability,w_id,m_id): any {
        return this.MenuRepo.update(m_id,{m_name:m_name,m_type:m_type,m_price:m_price,m_availability:m_availability,waiter:w_id});
      }
    
    updateMenu(menu:MenuUpdateList, m_id:any):any {
        return this.MenuRepo.update(menu,m_id);
           }
    
    removeMenu(m_id):any {
            return this.MenuRepo.delete(m_id);
        }
        
    findMenu(query): any{
      return this.MenuRepo.findOneBy({m_id:query.m_id,m_name:query.m_name });
      }
    
}