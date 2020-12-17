import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface User{
 id?:number,
 name?:string,
 username?:string,
 email?:string,
 password?:string
}

@Entity()
export class UserEntity implements User{
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    name?:string;
    @Column({unique:true})
    username?:string;
    @Column()
    email?:string;
    @Column({ select: false })
    password?:string
}