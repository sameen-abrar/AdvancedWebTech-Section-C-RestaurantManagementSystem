import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { ManagerEntity } from '../manager/manager.entity';

@Entity("cook")
export class CookEntity{
  @PrimaryGeneratedColumn()
  c_id: number;

  @Column()
  c_name: string;

  @Column()
  c_age: number;

  @Column()
  c_gender: string;

  @Column()
  c_address: string;

  @Column()
  c_salary: number;

  @Column()
  c_email: string;

  @Column()
  c_contact: string;

  @ManyToOne(() => ManagerEntity, (manager) => manager.cooks)
  manager : ManagerEntity

}