import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CustomerComponent} from './customer.component';
import {ProcesosComponent} from './procesos/procesos.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {ProfileComponent} from "./profile/profile.component";
import {JobsComponent} from "./jobs/jobs.component";
import {MessageComponent} from "./message/message.component";

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: CustomerComponent,
        children: [
          {path: '', component: ProcesosComponent },
          {path: 'procesos', component: ProcesosComponent },
          {path: 'perfil', component: ProfileComponent },
          {path: 'bolsaDeTrabajo', component: JobsComponent },
          {path: 'Mensajeria', component: MessageComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class CustomerRoutes {
}
