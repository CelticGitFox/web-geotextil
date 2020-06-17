import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CargadatosComponent} from './cargadatos.component';
import {GestionarusuariosComponent} from './gestionarusuarios/gestionarusuarios.component';
import {AuthGuard} from '../../system/auth/auth.guard';
import {AuthModule} from '../../system/auth/auth.module';

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([
      {
        path: '', component: CargadatosComponent,
        children: [
          {path: '', component: GestionarusuariosComponent },
          {path: 'gestionarusuarios', component: GestionarusuariosComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class CargadatosRoutes {
}
