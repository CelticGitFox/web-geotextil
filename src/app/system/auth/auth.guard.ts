import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import {ToastrService} from 'ngx-toastr';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private _toasrService: ToastrService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.getToken()) {
      return true;
    }
    this._toasrService.error('Cierre de sesión por inactividad')
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
