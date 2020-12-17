import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, throwError, } from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators'
import { AuthService } from 'src/auth/auth/auth.service';
import { User, UserEntity } from 'src/models/user';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userrepository:Repository<UserEntity>,
         private auth:AuthService
    ){}

    createUser(user:User):Observable<User>{
        return this.auth.hashPassword(user.password).pipe(
            switchMap((hash)=>{
                const userEntity = new UserEntity();
                userEntity.email = user.email
                userEntity.id = user.id
                userEntity.name = user.name
                userEntity.username = user.username
                userEntity.password = hash
                return from(this.userrepository.save(userEntity)).pipe(
                    map((user)=>{
                        const {password, ...result} = user;
                        return result;
                    }),
                    catchError(er=>throwError(er))
                )
            })
        )
    }

    findAll():Observable<User[]>{
        return from(this.userrepository.find()).pipe(
            map(users=>{
                users.forEach(function(x){delete x.password})
                return users;
            })
        )
        )
    }

    delete(id:number):Observable<any>{
        if(this.userrepository.findOne(id))
        return from(this.userrepository.delete(id))
        return null;
    }
    
    updateOne(user:User):Observable<any>{
        delete user.password
        delete user.email
        return from(this.userrepository.update(user.id, user)) 
    }
    
    findOne(id:number):Observable<User>{
        return from(this.userrepository.findOne(id)).pipe(
            map(user=>{
                const {password, ...result} = user;
                return user
            })
        )    
    }

    validateUser(email:string, password:string):Observable<User>{
        return from(this.userrepository.findOne({email})).pipe(
            switchMap(res=> this.auth.verifyPassword(password, res.password).pipe(
                map(match=>{
                    if(match){
                        const {password, ...result} = res;
                        return result
                    }
                    else throw Error;
                })
            ))
        )
    }

    login(user:User):Observable<string>{
        return this.validateUser(user.email, user.password).pipe(
            switchMap(user=>{
                if(user) return this.auth.generateJwt(user).pipe(
                    map((jwt:string)=>jwt)
                )
                else return "wrong credentials"
            })
        )
    }
}
