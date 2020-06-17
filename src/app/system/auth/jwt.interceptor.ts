import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {LoaderService} from '../../common/loader/loader.service';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    public _spinner: NgxSpinnerService,
    // private loader: LoaderService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    //console.log(this.authService.getToken());
    let newHeader = req.headers.set('Accept', 'application/json');
    if (this.router.url === '/token') {

    } else {
      let token: string = null;
      try {
        token = this.authService.getToken();
      } catch (err) {
        console.log(err);
      }
      if (token !== null) {
        newHeader = newHeader.set('Authorization', 'Bearer ' + token);
      } else {
        this.router.navigate(['/login']);
      }
    }

    const reqHeader = req.clone({
      headers: newHeader
    });

    return handler.handle(reqHeader).pipe(
      map((event: HttpEvent<any>) => {
        this._spinner.show();
        if (event instanceof HttpResponse) {
          // console.log('event--->>>', event);
        }
        return event;
      }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 0:
              this.router.navigate(['/login']);
              break;
            case 401:
              this.router.navigate(['/login']);
              break;
            default:
          }
        }
        return throwError(err);
      }),
      finalize(() => {
        this._spinner.hide();
      })
    );

  }
}
