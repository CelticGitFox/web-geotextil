import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmComponent } from './adm.component';
import { AdmRoutes } from './adm.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Md5} from "ts-md5";
import {ProfileComponent} from "./profile/profile.component";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [AdmComponent, ProfileComponent ],
  imports: [
    AdmRoutes,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [
    Md5
  ]
})
export class AdmModule { }
