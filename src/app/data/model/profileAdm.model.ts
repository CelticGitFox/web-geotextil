import { Injectable } from '@angular/core';

@Injectable()
export class ProfileAdmModel {
  public id?: number;
  public name?: string;
  public dni?: number;
  public phone?: number;
  public email?: string;
  public address?: string;
  public photoUrl?: string;
  public updateDate?: any;
}
