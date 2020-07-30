import { Injectable } from '@angular/core';

@Injectable()
export class RoleOptionModel {
  public id?: number;
  public roleId?: number;
  public optionId?: number;
  public view = false;
  public edit = false;
  public delete = false;
}
