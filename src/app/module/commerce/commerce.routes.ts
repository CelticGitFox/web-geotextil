import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommerceComponent} from './commerce.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {ProfileComponent} from './profile/profile.component';
import {JobsComponent} from './jobs/jobs.component';
import {MessageComponent} from './message/message.component';
import {ProccessComponent} from './proccess/proccess.component';
import {ListJobsComponent} from './listJobs/listJobs.component';
import {ListPromotionsComponent} from './listPromotions/listPromotions.component';
import {DetailJobsComponent} from './detailJobs/detailJobs.component';
import {DetailPromotionsComponent} from './detailPromotions/detailPromotions.component';

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: CommerceComponent,
        children: [
          {path: '', component: ProfileComponent },
          {path: 'perfil', component: ProfileComponent },
          {path: 'mensajeria', component: MessageComponent },
          {path: 'procesos', component: ProccessComponent },
          {path: 'listado_bolsa_trabajo', component: ListJobsComponent },
          {path: 'listado_promocion', component: ListPromotionsComponent },
          {path: 'listado_bolsa_trabajo/bolsa_trabajo/:id', component: DetailJobsComponent },
          {path: 'listado_promocion/promocion/:id', component: DetailPromotionsComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class CommerceRoutes {
}
