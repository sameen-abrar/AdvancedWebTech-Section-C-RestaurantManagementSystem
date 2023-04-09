import { IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, IsNull } from 'typeorm';
import { userEntity } from '../../User/UserEntites/user.entity';
// import { menuEntity } from './menu.entity';
import { OrderedItemsEntity } from './OrderedItems.entity';
import { TrasnsactionsEntity } from './transactions.entity';

@Entity("coupons")
export class CouponsEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Code: string;

    @Column()
    Percentage:Number;

    @Column()
    Validity_Start:Date;

    @Column()
    Validity_Expired: Date;

    @OneToMany(() => TrasnsactionsEntity, (transactions) => transactions.coupons,)
    transactions: TrasnsactionsEntity

}