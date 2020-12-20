import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  getAll(){
    return this.http.get('/api/users').subscribe(
    res=>{
        var z=res
        return res}
    )
  }
}
