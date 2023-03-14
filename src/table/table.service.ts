import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TableInfo, TableUpdateInfo } from './table.dto';
import { TableEntity } from './table.entity';

@Injectable()
export class TableService {

    constructor(
        @InjectRepository(TableEntity)
        private TableRepo: Repository<TableEntity>,
      ) {}

    getTable(): any {
        return this.TableRepo.find();
      }    

    addTable(table:TableInfo):any {
        const tableinfo = new TableEntity()
        tableinfo.t_position = table.t_position;
        tableinfo.seatcapacity = table.seatcapacity;
        tableinfo.t_status = table.t_status;
        tableinfo.waiter = table.w_id;    
        return this.TableRepo.save(tableinfo);
      }

    modifyTable(t_position,seatcapacity,t_status,w_id,t_id): any {
        return this.TableRepo.update(t_id,{t_position:t_position,seatcapacity:seatcapacity,t_status:t_status,waiter:w_id});
      }
    
    updateTable(table:TableUpdateInfo, t_id:any):any {
        return this.TableRepo.update(table,t_id);
           }
    
    cancelTable(t_id):any {
            return this.TableRepo.delete(t_id);
        }
        
    findTable(query): any{
      return this.TableRepo.findOneBy({t_id:query.t_id,t_position:query.t_position});
      }
      
}