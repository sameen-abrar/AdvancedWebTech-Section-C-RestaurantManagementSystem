import { IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, IsNull } from 'typeorm';
import { userEntity } from '../../User/UserEntites/user.entity';

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


}