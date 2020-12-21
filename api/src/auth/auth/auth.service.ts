import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable, of } from 'rxjs';
import { User } from 'src/models/user';
const bcrpt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(private jwt:JwtService){}

    generateJwt(user:User):Observable<string>{
        console.log(user.password)
      return from(this.jwt.signAsync(user))
    }

    hashPassword(password:string):Observable<string>{
        return from<string>(bcrpt.hash(password,12))
    }
    verifyPassword(newPassword: string, passwortHash: string): Observable<any>{
        return from(bcrpt.compare(newPassword, passwortHash));
    }
  
}
