import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService, BASE_URL_API} from 'src/app/app.service';
import {Observable} from 'rxjs';

@Injectable()
export class CatalogueService extends AppService {

  constructor(http: HttpClient) {
    super(http);
  }

  getListCatalogue<T>(): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Catalogue`;
    return this.get<T[]>(this.endpoint);
  }

  getCatalogue<T>(id: number): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Catalogue/${id}`;
    return this.get<T[]>(this.endpoint);
  }

  deleteCatalogue<T>(id: number): Observable<any> {
    this.endpoint = `${BASE_URL_API}/Catalogue/${id}`;
    return this.delete(this.endpoint);
  }

  savetCatalogue<T>(datos: any): Observable<Object> {
    this.endpoint = `${BASE_URL_API}/Catalogue`;
    return this.post(this.endpoint, datos);
  }

  editCatalogue<T>(id: number, datos: any): Observable<Object> {
    this.endpoint = `${BASE_URL_API}/Catalogue/${id}`;
    return this.put(this.endpoint, datos);
  }
}
