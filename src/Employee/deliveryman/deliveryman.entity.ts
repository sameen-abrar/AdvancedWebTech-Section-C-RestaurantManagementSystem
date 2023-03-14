import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { ManagerEntity } from '../manager/manager.entity';

@Entity("deliveryman")
export class DeliverymanEntity{
  @PrimaryGeneratedColumn()
  dm_id: number;

  @Column()
  dm_name: string;

  @Column()
  dm_age: number;

  @Column()
  dm_gender: string;

  @Column()
  dm_address: string;

  @Column()
  dm_salary: number;

  @Column()
  dm_email: string;

  @Column()
  dm_contact: string;

  @Column()
  dm_vehicleno:string;

  @ManyToOne(() => ManagerEntity, (manager) => manager.dms)
  manager : ManagerEntity

}