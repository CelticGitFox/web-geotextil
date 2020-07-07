import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CustomerComponent} from './customer.component';
import {ProcesosComponent} from './procesos/procesos.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {ProfileComponent} from "./profile/profile.component";
import {JobsComponent} from "./jobs/jobs.component";
import {MessageComponent} from "./message/message.component";
import {BolsaTrabajoComponent} from "../web/bolsaTrabajo/bolsaTrabajo.component";
import {MensajeriaComponent} from "../web/mensajeria/mensajeria.component";

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
          {path: 'bolsa', component: BolsaTrabajoComponent },
          {path: 'mensajeria', component: MensajeriaComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class CustomerRoutes {
}
