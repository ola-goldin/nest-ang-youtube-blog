import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { runInThisContext } from 'vm';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService:UserService){}
    @Post()
    create(@Body()user:User):Observable<User>{
      return this.userService.createUser(user);
    }
    
    @Get()
    findAll():Observable<User[]>{
       return this.userService.findAll()
    }
    
    @Delete(':id')
    delete(@Param()params):Observable<User>{
        return this.userService.delete(params.id)
    }
    @Get(':id')
    findOne(@Param()id:string):Observable<User>{
        return this.userService.findOne(Number(id))
    }

    @Put(':id')
    edit(@Param()id:string, @Body()user:User):Observable<User>{
        return this.edit(id,user)
    }
}
