import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppService, BASE_URL_API} from 'src/app/app.service';
import {Observable} from 'rxjs';
import {RolModel} from "../model/rol.model";

@Injectable()
export class RolService extends AppService {

  constructor(http: HttpClient) {
    super(http);
  }

  getListRol<T>(): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Role`;
    return this.get<T[]>(this.endpoint);
  }

  getRol<T>(id: number): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Role/${id}`;
    return this.get<T[]>(this.endpoint);
  }

  deleteRol<T>(id: number): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Role/${id}`;
    return this.delete(this.endpoint);
  }

  saveRol<T>(datos: any): Observable<Object> {
    this.endpoint = `${BASE_URL_API}/Role`;
    return this.post(this.endpoint, datos);
  }

  editRol<T>(datos: RolModel, id: number): Observable<Object> {
    this.endpoint = `${BASE_URL_API}/Role/${id}`;
    return this.put(this.endpoint, datos);
  }
}
