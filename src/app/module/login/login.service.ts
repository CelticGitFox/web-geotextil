import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {AppService, BASE_URL_API} from '../../app.service';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';


@Injectable()
export class LoginService extends AppService {

  constructor(http: HttpClient, private _route: Router) {
    super(http);

  }

  _user = new BehaviorSubject<any>(null);
  observableUser$ = this._user.asObservable();

  changeUser(data: any) {
    this._user.next(data);
  }


  login(usuario: any): Observable<any> {
    // const urlEndpoint = 'http://mcvbanptest.us-east-2.elasticbeanstalk.com/oauth/token';
    const urlEndpoint = `${BASE_URL_API}/Login?mail=${usuario.mail}&pass=${usuario.pass}`;

    // const credenciales = btoa('clientApp' + ':' + '123456');
    //
    // const httpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Authorization': 'Basic ' + credenciales
    // });
    // const params = new URLSearchParams();
    // params.set('mail', usuario.mail);
    // params.set('pass', usuario.pass);
    // params.set('grant_type', 'password');
    // return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
    return this.http.get<any>(urlEndpoint);
  }

  // authorizate() {
  //   this.endpoint = `${BASE_URL_API}/user`;
  //   return this.get(this.endpoint);
  // }

  // olvidoContrasena(form: any): Observable<any> {
  //   var numDocumento = parseInt(form.numeroDocumento);
  //   this.endpoint = `${BASE_URL_API}/ubigeo/olvidocontrasena?numeroDocumento=${numDocumento}&correo=${form.usuario}`;
  //   return this.getSer(this.endpoint);
  // }

  public cerrarSesion() {

  }
}

