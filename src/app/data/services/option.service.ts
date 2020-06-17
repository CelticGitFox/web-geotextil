import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppService, BASE_URL_API} from 'src/app/app.service';
import {Observable} from 'rxjs';

@Injectable()
export class OptionService extends AppService {

  constructor(http: HttpClient) {
    super(http);
  }

  getListOptionHierarchy<T>(): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Option/Hierarchy`;
    return this.get<T[]>(this.endpoint);
  }

  getListOptions<T>(): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Option`;
    return this.get<T[]>(this.endpoint);
  }

  getOption<T>(id: number): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Option/${id}`;
    return this.get<T[]>(this.endpoint);
  }
}
