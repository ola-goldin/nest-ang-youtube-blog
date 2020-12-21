import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  login({email, password}){
   const user={email, password}
    return this.http.post<any>('/api/users/login', user ).pipe(
      map(token=>{
        console.log(token)
        return token
      })
    )
     
  }
   
  getAll(){
    return this.http.get('/api/users').subscribe(
    res=>{
        var z=res
        return res}
    )
  }
}
