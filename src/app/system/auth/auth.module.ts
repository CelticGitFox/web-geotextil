import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthUserService } from './authUser.service';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthUserService,
    AuthGuard,
    [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}]
  ]
})
export class AuthModule {
}
