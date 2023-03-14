import { ConflictException } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, IsNull } from 'typeorm';
import { userEntity } from '../../User/UserEntites/user.entity';
import { menuEntity } from './menu.entity';
import { OrderedItemsEntity } from './OrderedItems.entity';

@Entity("customers")
export class customerEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email:string;

    @Column()
    phone:number;

    @Column({nullable: true})
    no_of_returns: number;

    @OneToOne(() => userEntity, (user) => user.customer, {nullable: false})
    @JoinColumn()
    user: userEntity

    @Column()
    userId:number

    @OneToMany(() => OrderedItemsEntity, (orderedItems) => orderedItems.customer)
    orderedItems: OrderedItemsEntity[]

    @Column({nullable: true})
    FileName: string;

}