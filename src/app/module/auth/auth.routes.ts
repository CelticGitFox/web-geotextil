import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: AuthComponent,
        children: [
          {path: '', component: LoginComponent },
          {path: 'login', component: LoginComponent },
          {path: 'register', component: RegisterComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AuthRoutes {
}
