import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { customerEntity } from './customer.entity';

@Entity("users")
export class userEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "UserName",
        type: 'varchar',
        length: 50,
        nullable: false
    })
    UserName:string
    

    @Column({
        name: "Password",
        type: 'varchar',
        length: 50,
        nullable: false
    })
    Password: string

    @Column({
        name: "Registration_Date",
        type: 'datetime',
        nullable: false
    })
    Registration_Date: Date

    @OneToOne(() => customerEntity, (customer)=>customer.user)
    customer: customerEntity


}