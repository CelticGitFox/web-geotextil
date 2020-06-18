import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {WebComponent} from './web.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';
import {NosotrosComponent} from "./nosotros/nosotros.component";

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: WebComponent,
        children: [
          {path: '', component: HomeComponent },
          {path: 'home', component: HomeComponent },
          {path: 'nosotros', component: NosotrosComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class WebRoutes {
}
