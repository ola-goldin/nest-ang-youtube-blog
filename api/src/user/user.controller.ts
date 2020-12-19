import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { access } from 'fs';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/auth/auth/auth.service';
import { hasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles, User } from 'src/models/user';
import { runInThisContext } from 'vm';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService:UserService){}
    @Post()
    create(@Body()user:User):Observable<User>|Object{
      return this.userService.createUser(user).pipe(
          map(user=> user),
          catchError(e=>of({error:e.message}))
      );
    }
    
    @Post('login')
    login(user:User):Observable<Object>{
      return this.userService.login(user).pipe(
          map(jwt=>{
            return {access_token :jwt}
          })
      )
    }
   
    @hasRoles(Roles.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
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
      console.log(id['id'])
        return this.userService.findOne(Number(id['id']))
    }

    @Put(':id')
    edit(@Param()id:string, @Body()user:User):Observable<User>{
        return this.edit(id,user)
    }
}
