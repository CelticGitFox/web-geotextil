import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './system/auth/auth.module';
import { AuthGuard } from './system/auth/auth.guard';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';
import {LayoutUserHomeComponent} from "./layout/layoutUser-home/layoutUser-home.component";

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'web', pathMatch: 'full' },
      { path: 'auth', loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule), component: LayoutHomeComponent },
      { path: 'web', loadChildren: () => import('./module/web/web.module').then(m => m.WebModule), component: LayoutHomeComponent },
      { path: 'adm', loadChildren: () => import('./module/adm/adm.module').then(m => m.AdmModule), component: LayoutHomeComponent },
      { path: 'customer', loadChildren: () => import('./module/customer/customer.module').then(m => m.CustomerModule), component: LayoutUserHomeComponent  },
      { path: '**', redirectTo: 'web/home', pathMatch: 'full' }

    ], { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutes {
}
