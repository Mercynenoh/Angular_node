import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './Authentication/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Authentication/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule

  ],
  exports:[
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
