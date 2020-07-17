import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmComponent } from './adm.component';
import { AdmRoutes } from './adm.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Md5} from "ts-md5";
import {ProfileComponent} from "./profile/profile.component";
import {MatTabsModule} from "@angular/material/tabs";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NotificationComponent} from "./notification/notification.component";
import {RequestCommerceComponent} from "./requestCommerce/requestCommerce.component";
import {MatTableModule} from "@angular/material/table";
import { MatPaginatorModule} from "@angular/material/paginator";
import {RequestJobsComponent} from "./requestJobs/requestJobs.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {RequestPromotionsComponent} from "./requestPromotions/requestPromotions.component";
import {ListCommerceComponent} from "./listCommerce/listCommerce.component";
import {ListUsersComponent} from "./listUsers/listUsers.component";
import {ListJobsComponent} from "./listJobs/listJobs.component";
import {ListPromotionsComponent} from "./listPromotions/listPromotions.component";

@NgModule({
  declarations: [AdmComponent, ProfileComponent, NotificationComponent, RequestCommerceComponent, RequestJobsComponent, RequestPromotionsComponent, ListCommerceComponent, ListUsersComponent,
  ListJobsComponent, ListPromotionsComponent],
  imports: [
    AdmRoutes,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    Md5
  ]
})
export class AdmModule { }
