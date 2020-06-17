import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppService, BASE_URL_API} from 'src/app/app.service';
import {Observable} from 'rxjs';

@Injectable()
export class UserService extends AppService {

  constructor(http: HttpClient) {
    super(http);
  }

  getListUser<T>(): Observable<any> {
    this.endpoint = `${BASE_URL_API}/User`;
    return this.get<T[]>(this.endpoint);
  }

  getUser<T>(id: number): Observable<any> {
    this.endpoint = `${BASE_URL_API}/User/${id}`;
    return this.get<T[]>(this.endpoint);
  }

  deleteUser<T>(id: number): Observable<any> {
    this.endpoint = `${BASE_URL_API}/User/${id}`;
    return this.delete(this.endpoint);
  }

  saveUser<T>(datos: any): Observable<Object> {
    this.endpoint = `${BASE_URL_API}/User`;
    return this.post(this.endpoint, datos);
  }

  updateUserTrree<T>(datos: any): Observable<Object> {
    this.endpoint = `${BASE_URL_API}/User/UpdateUserTree`;
    return this.post(this.endpoint, datos);
  }

  editUser<T>(id: number, datos: any): Observable<Object> {
    this.endpoint = `${BASE_URL_API}/User/${id}`;
    return this.put(this.endpoint, datos);
  }
}
