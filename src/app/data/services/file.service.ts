import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService, BASE_URL_API } from 'src/app/app.service';
import { Observable } from 'rxjs';
import {FileMultipleModel} from "../model/fileMultiple.model";

@Injectable()
export class FileService extends AppService {

    constructor(http: HttpClient) {
        super(http);
    }

    postFileServer<T>(type: string, RelationId: number, file1: File, filename: string): Observable<any> {
        let formData = new FormData();
        formData.append("Type", type);
        formData.append("RelationId", RelationId.toString());
        formData.append("File1", file1, filename);
        this.endpoint = `${BASE_URL_API}/File`;
        return this.http.post(this.endpoint, formData);
    }

    postFileServerMultiple<T>(type: string, file1: FileMultipleModel[]): Observable<any> {
        let formData = new FormData();
        formData.append("Type", type);
        file1.forEach((file) => {
          formData.append("RelationId", file.relationId.toString());
          formData.append("File1", file.files, file.files['name']);
        });

        this.endpoint = `${BASE_URL_API}/File`;
        return this.http.post(this.endpoint, formData);
    }

    getFileServer<T>(type: string, propertyId: number): Observable<any> {
        this.endpoint = `${BASE_URL_API}/File/${type}/${propertyId}`;
        return this.get<T[]>(this.endpoint);
    }

    getFileServerByType<T>(type: string): Observable<any> {
        this.endpoint = `${BASE_URL_API}/File/Type/${type}`;
        return this.get<T[]>(this.endpoint);
    }
}
