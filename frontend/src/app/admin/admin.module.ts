import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {  MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { UsersComponent } from './components/users/users.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [ LoginComponent, RegisterComponent, UsersComponent],
  imports: [
    CommonModule,BrowserModule,
    FormsModule, ReactiveFormsModule,MatFormFieldModule,MatIconModule,BrowserAnimationsModule,MatInputModule,MatButtonModule, MatTableModule,MatPaginatorModule
  ],

})
export class AdminModule { }
