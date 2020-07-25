import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CustomerComponent} from './customer.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {ProfileComponent} from './profile/profile.component';
import {JobsComponent} from './jobs/jobs.component';
import {MessageComponent} from './message/message.component';
import {ProccessComponent} from './proccess/proccess.component';

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: CustomerComponent,
        children: [
          {path: '', component: ProfileComponent },
          {path: 'perfil', component: ProfileComponent },
          {path: 'mensajeria', component: MessageComponent },
          {path: 'procesos', component: ProccessComponent },
          {path: 'bolsa_trabajo', component: JobsComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class CustomerRoutes {
}
