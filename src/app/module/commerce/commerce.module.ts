import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommerceComponent} from './commerce.component';
import {CommerceRoutes} from './commerce.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Md5} from 'ts-md5';
import {ProfileComponent} from './profile/profile.component';
import {MessageComponent} from './message/message.component';
import {ListJobsComponent} from './listJobs/listJobs.component';
import {DetailJobsComponent} from './detailJobs/detailJobs.component';
import {DetailPromotionsComponent} from './detailPromotions/detailPromotions.component';
import {ListPromotionsComponent} from './listPromotions/listPromotions.component';
import {MatTabsModule} from '@angular/material/tabs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [CommerceComponent, ProfileComponent, MessageComponent, ListPromotionsComponent, ListJobsComponent,
  DetailJobsComponent, DetailPromotionsComponent],
  imports: [
    CommerceRoutes,
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
export class CommerceModule { }
