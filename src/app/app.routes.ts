import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './system/auth/auth.module';
import { AuthGuard } from './system/auth/auth.guard';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';
import {LoginComponent} from './module/login/login.component';

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule), component: LayoutHomeComponent },
      { path: 'cargadatos', loadChildren: () => import('./module/cargadatos/cargadatos.module').then(m => m.CargadatosModule), component: LayoutHomeComponent  },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }

    ], { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutes {
}
