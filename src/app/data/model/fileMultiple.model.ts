import { Injectable } from '@angular/core';

@Injectable()
export class FileMultipleModel {
  public id?: number;
  public type?: string;
  public relationId?: number;
  public criteriaId?: number;
  public files?: File;
}
