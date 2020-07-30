import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Md5} from 'ts-md5';
import {LoginComponent} from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {Register} from 'ts-node';
import {RegisterComponent} from './register/register.component';
import {LoginService} from './login/login.service';
import {RecoverComponent} from './recover/recover.component';
import {MatTableModule} from '@angular/material/table';
import {RegisterCommerceComponent} from './registerCommerce/registerCommerce.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {LoginAdmService} from './loginAdm/loginAdm.service';
import {LoginAdmComponent} from './loginAdm/loginAdm.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, RecoverComponent, RegisterCommerceComponent, LoginAdmComponent ],
  imports: [
    AuthRoutes,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    Md5,
    LoginService,
    LoginAdmService
  ]
})
export class AuthModule { }
