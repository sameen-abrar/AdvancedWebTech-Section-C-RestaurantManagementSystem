import { IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, IsNull, ManyToOne } from 'typeorm';
import { userEntity } from '../../User/UserEntites/user.entity';
import { customerEntity } from './customer.entity';
import { menuEntity } from './menu.entity';
import { TrasnsactionsEntity } from './transactions.entity';
// import { OrderedItemsEntity } from './OrderedIt ems.entity';

@Entity("OrderedItems")
export class OrderedItemsEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Amount: Number;

    @Column()
    Gross_Price: Number;

    @JoinColumn()
    @ManyToOne(() => customerEntity, (customer) => customer.orderedItems)
    customer: customerEntity

    @Column()
    customerId: Number

    @JoinColumn()
    @ManyToOne(() => menuEntity, (menu) => menu.orderedItems)
    menu: menuEntity

    @Column()
    menuId: Number

    @JoinColumn()
    @ManyToOne(() => TrasnsactionsEntity, (transactions) => transactions.orderedItems, {nullable: true})
    transactions: TrasnsactionsEntity


}