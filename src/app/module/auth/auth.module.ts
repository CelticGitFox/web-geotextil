import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Md5} from "ts-md5";
import {LoginComponent} from "./login/login.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {Register} from "ts-node";
import {RegisterComponent} from "./register/register.component";
import {LoginService} from "./login/login.service";

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent ],
  imports: [
    AuthRoutes,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    Md5,
    LoginService
  ]
})
export class AuthModule { }
