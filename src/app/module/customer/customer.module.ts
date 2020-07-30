import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutes } from './customer.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Md5} from 'ts-md5';
import {ProfileComponent} from './profile/profile.component';
import {MessageComponent} from './message/message.component';
import {JobsComponent} from './jobs/jobs.component';
import {ProccessComponent} from './proccess/proccess.component';

@NgModule({
  declarations: [CustomerComponent, ProfileComponent, MessageComponent, JobsComponent, ProccessComponent, JobsComponent ],
  imports: [
    CustomerRoutes,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Md5
  ]
})
export class CustomerModule { }
