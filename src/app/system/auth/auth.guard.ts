import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from './authUser.service';
import {ToastrService} from 'ngx-toastr';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    // private authService: AuthService,
    private _toasrService: ToastrService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.authService.getToken()) {
    //   return true;
    // }
    // this._toasrService.error('Cierre de sesión por inactividad')
    // this.router.navigate(['/dashboard'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
