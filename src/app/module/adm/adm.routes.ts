import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdmComponent} from './adm.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {ProfileComponent} from "./profile/profile.component";
import {NotificationComponent} from "./notification/notification.component";

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
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdmRoutes {
}
