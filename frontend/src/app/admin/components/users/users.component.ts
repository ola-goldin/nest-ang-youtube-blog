import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { User, UserData } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  dataSource:UserData=null;
  length:0;
  pageSize:0;
 // pageSizeOptions:[5,10, 20, 100];
  pageEvent:PageEvent;
  columnsToDisplay =['id','name','username', 'email','password', 'role'];

  constructor(private users:UsersService) { }
 
  ngOnInit(): void {
    this.initDataSource();
  }
  
  onPaginateChange($event:PageEvent){
   let page = $event.pageIndex;
   let size = $event.pageSize;
   page = page+1;
   this.users.findAll(page, size).pipe(
     map(res=>{
       this.dataSource = res
     })
   ).subscribe()
  }

  initDataSource(){
    this.users.findAll(1,10).pipe(
      map((userData:UserData)=>{this.dataSource = userData})
    ).subscribe()
  }
}
