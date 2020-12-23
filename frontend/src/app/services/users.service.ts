import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, UserData } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http :HttpClient) { }

  findAll(page:number, size:number):Observable<UserData>{
    let params = new HttpParams();
  params.append('page', String(page));
  params.append('limit', String(size))
    return this.http.get('/api/users',{params} ).pipe(
      map((data:UserData) =>data),
      catchError(e=>throwError(e))
    )
  }
}
