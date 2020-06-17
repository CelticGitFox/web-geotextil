import { Injectable } from '@angular/core';
import {RolModel} from "./rol.model";
import {GroupRoleModel} from "./groupRole.model";

@Injectable()
export class GroupModel {
  public id?: number;
  public name?: string;
  public description?: string;
  public groupRoles?: GroupRoleModel[];
}
