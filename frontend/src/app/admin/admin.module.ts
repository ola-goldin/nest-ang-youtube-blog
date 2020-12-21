import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {  MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [OverviewComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,BrowserModule,
    FormsModule, ReactiveFormsModule,MatFormFieldModule,MatIconModule,BrowserAnimationsModule,MatInputModule,MatButtonModule
  ]
})
export class AdminModule { }
