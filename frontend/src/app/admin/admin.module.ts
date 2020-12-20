import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [OverviewComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
