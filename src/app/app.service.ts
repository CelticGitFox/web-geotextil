import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

export const BASE_URL_API = `${environment.apiProtocol}://${environment.apiServer}:${environment.apiPort}/${environment.apiPath}`;
export const BASE_URL_IMG = `${environment.apiProtocol}://${environment.apiServer}:${environment.apiPort}`;
export const BASE_URL_API2 = `http://localhost:3000`;

@Injectable()
export class AppService {

  // variables
  public endpoint = '/';

  constructor(
    public http: HttpClient
  ) {
  }

  public generateHeaders(type?: any): HttpHeaders {
    let token = null;
    if (localStorage.getItem('access_token')) {
      token = localStorage.getItem('access_token');
    }
    let httpHeaders = null;
    if (token) {
      httpHeaders = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Bearer ' + token});
    } else {
      httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    }
    return httpHeaders;
  }

  public generateHeadersAuthorization(): HttpHeaders {
    const credenciales = btoa('serviceDesk' + ':' + 'helpdesk_Ingemmet2560');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + credenciales
    });
    return httpHeaders;
  }

  get<T>(url: any, type?: any): Observable<any> {
    const headers = this.generateHeaders(type);
    return this.http.get<T[]>(url, {headers, responseType: type});
  }

  postAuthorization(url: any, object: any, type?: any): Observable<any> {
    const headers = this.generateHeadersAuthorization();
    return this.http.post(url, object, {headers, responseType: 'json'});
  }

  post(url: any, object: any, type?: any): Observable<any> {
    const headers = this.generateHeaders(type);
    return this.http.post(url, object, {headers, responseType: 'json'});
  }

  patch(url, data: any, accessToken: string = null): Observable<any> {
    const headers = this.generateHeaders();
    return this.http.patch(url, data, {headers});
  }

  put(url: any, object: any, type?: any): Observable<any> {
    const headers = this.generateHeaders(type);
    return this.http.put(url, object, {headers, responseType: type});
  }

  delete(url: any, type?: any): Observable<any> {
    const headers = this.generateHeaders(type);
    return this.http.delete(url, {headers, responseType: type});
  }

  generate(url: any, object: any): Observable<any> {
    const headers = this.generateHeaders();
    return this.http.post(url, object, {headers, responseType: 'blob'});
  }

  request(req: any): Observable<any> {
    const token = JSON.parse(localStorage.getItem('currentUser')).access_token;
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Bearer ' + token});
    return this.http.request(req);
  }
}
