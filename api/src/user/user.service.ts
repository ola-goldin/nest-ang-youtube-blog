import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { User, UserEntity } from 'src/models/user';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userrepository:Repository<UserEntity>
    ){}

    createUser(user:User):Observable<User>{
        return from(this.userrepository.save(user))
    }

    findAll():Observable<User[]>{
        return from(this.userrepository.find())
    }

    delete(id:number):Observable<any>{
        if(this.userrepository.findOne(id))
        return from(this.userrepository.delete(id))
        return null;
    }
    
    updateOne(user:User):Observable<any>{
        return from(this.userrepository.update(user.id, user)) 
    }
    
    findOne(id:number):Observable<User>{
        return from(this.userrepository.findOne(id))
    }

    
}
