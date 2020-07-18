import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RecoverComponent} from "./recover/recover.component";
import {RegisterCommerceComponent} from "./registerCommerce/registerCommerce.component";
import {LoginAdmComponent} from "./loginAdm/loginAdm.component";

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: AuthComponent,
        children: [
          {path: '', component: LoginComponent },
          {path: 'login', component: LoginComponent },
          {path: 'geo_login/textil', component: LoginAdmComponent },
          {path: 'register', component: RegisterComponent },
          {path: 'recover', component: RecoverComponent },
          {path: 'registro_comercio', component: RegisterCommerceComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AuthRoutes {
}
