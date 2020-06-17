import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppService, BASE_URL_API} from 'src/app/app.service';
import {Observable} from 'rxjs';
import {GroupModel} from "../model/group.model";

@Injectable()
export class GroupService extends AppService {

  constructor(http: HttpClient) {
    super(http);
  }

  getListGroup<T>(): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Group`;
    return this.get<T[]>(this.endpoint);
  }

  getGroup<T>(id: number): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Group/${id}`;
    return this.get<T[]>(this.endpoint);
  }

  deleteGroup<T>(id: number): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Group/${id}`;
    return this.delete(this.endpoint);
  }

  saveGroup<T>(datos: GroupModel): Observable<Object> {
    this.endpoint = `${BASE_URL_API}/Group`;
    return this.post(this.endpoint, datos);
  }

  editGroup<T>(datos: GroupModel, id: number): Observable<Object> {
    this.endpoint = `${BASE_URL_API}/Group/${id}`;
    return this.put(this.endpoint, datos);
  }
}
