import { Injectable } from '@angular/core';
import {OptionModel} from './option.model';
import {RoleOptionModel} from "./roleOption.model";

@Injectable()
export class RolModel {
  public id?: number;
  public name?: string;
  public description?: string;
  public roleOptions?: RoleOptionModel[];
}
