import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdmComponent} from './adm.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {ProfileComponent} from "./profile/profile.component";
import {NotificationComponent} from "./notification/notification.component";
import {RequestCommerceComponent} from "./requestCommerce/requestCommerce.component";
import {RequestJobsComponent} from "./requestJobs/requestJobs.component";
import {RequestPromotionsComponent} from "./requestPromotions/requestPromotions.component";
import {ListCommerceComponent} from "./listCommerce/listCommerce.component";
import {ListUsersComponent} from "./listUsers/listUsers.component";
import {ListJobsComponent} from "./listJobs/listJobs.component";
import {ListPromotionsComponent} from "./listPromotions/listPromotions.component";

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: AdmComponent,
        children: [
          {path: '', component: ProfileComponent },
          {path: 'perfil', component: ProfileComponent },
          {path: 'notificacion', component: NotificationComponent },
          {path: 'notificacion/solicitud_registro_comercio', component: RequestCommerceComponent },
          {path: 'notificacion/solicitud_bolsa_trabajo', component: RequestJobsComponent },
          {path: 'notificacion/solicitud_publicidad_promocion', component: RequestPromotionsComponent },
          {path: 'listado_comercios', component: ListCommerceComponent },
          {path: 'listado_usuarios', component: ListUsersComponent },
          {path: 'listado_bolsa_trabajo', component: ListJobsComponent },
          {path: 'listado_publicidad_promocion', component: ListPromotionsComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdmRoutes {
}
