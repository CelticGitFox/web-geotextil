import { Injectable } from '@angular/core';
import {OptionModel} from './option.model';
import {RoleOptionModel} from "./roleOption.model";

@Injectable()
export class GroupRoleModel {
  public id?: number;
  public roleId?: number;
  public groupRol?: number;
}
