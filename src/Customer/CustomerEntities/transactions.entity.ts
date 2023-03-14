import { IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, IsNull, ManyToOne } from 'typeorm';
import { userEntity } from '../../User/UserEntites/user.entity';
import { CouponsEntity } from './coupons.entity';
import { DineInEntity } from './dinein.entity';
// import { menuEntity } from './menu.entity';
import { OrderedItemsEntity } from './OrderedItems.entity';

@Entity("transactions")
export class TrasnsactionsEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Net_Total: Number;

    @Column()
    Time:Date;

    @OneToMany(() => OrderedItemsEntity, (orderedItems) => orderedItems.customer)
    orderedItems: OrderedItemsEntity[]

    @JoinColumn()
    @ManyToOne(() => CouponsEntity, (coupons) => coupons.transactions)
    coupons: CouponsEntity

    @Column()
    couponsId: Number

    @OneToOne(() => DineInEntity, (dinein) => dinein.transaction)
    dinein: DineInEntity

}