import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './system/auth/auth.module';
import { AuthGuard } from './system/auth/auth.guard';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'auth', loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule) },
      { path: 'dashboard', loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule), component: LayoutHomeComponent },
      { path: 'cargadatos', loadChildren: () => import('./module/cargadatos/cargadatos.module').then(m => m.CargadatosModule), component: LayoutHomeComponent  },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }

    ], { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutes {
}
