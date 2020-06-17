import { Injectable } from '@angular/core';

@Injectable()
export class RoleOptionModel {
  public id?: number;
  public roleId?: number;
  public optionId?: number;
  public view?: boolean = false;
  public edit?: boolean = false;
  public delete?: boolean = false;
}
