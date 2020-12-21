import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }
  loginForm:FormGroup;
  ngOnInit(): void {

    this.auth.getAll()
     this.loginForm = new FormGroup({
       email:new FormControl(null, [Validators.email, Validators.required]),
       password:new FormControl(null, [Validators.required])
     })

  }
   onSubmit(){
   return  this.auth.login(this.loginForm.value).pipe(
       map(token=>this.router.navigate(['admin']))
     ).subscribe()
   }
}
