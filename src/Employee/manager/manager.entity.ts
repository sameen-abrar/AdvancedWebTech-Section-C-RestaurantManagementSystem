import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CookEntity } from "../cook/cook.entity";
import { DeliverymanEntity } from "../deliveryman/deliveryman.entity";
import { WaiterEntity } from "../waiter/waiter.entity";

@Entity("manager")
export class ManagerEntity{
    @PrimaryGeneratedColumn()
    m_id: number;
  
    @Column()
    m_name: string;
  
    @Column()
    m_age: number;
  
    @Column()
    m_gender: string;
  
    @Column()
    m_address: string;
  
    @Column()
    m_salary: number;
  
    @Column()
    m_email: string;
  
    @Column()
    m_contact: string;

    @Column()
    m_password: string;

    @Column({default:null})
    m_profile: string;

    @OneToMany(() => WaiterEntity, (waiter) => waiter.manager)
    waiters : WaiterEntity[]

    @OneToMany(() => CookEntity, (cook) => cook.manager)
    cooks : CookEntity[]

    @OneToMany(() => DeliverymanEntity, (cook) => cook.manager)
    dms : DeliverymanEntity[]
    
}