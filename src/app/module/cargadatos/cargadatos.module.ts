import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargadatosComponent } from './cargadatos.component';
import { CargadatosRoutes } from './cargadatos.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GestionarusuariosComponent} from './gestionarusuarios/gestionarusuarios.component';
import {Md5} from "ts-md5";


@NgModule({
  declarations: [CargadatosComponent, GestionarusuariosComponent ],
  imports: [
    CargadatosRoutes,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Md5
  ]
})
export class CargadatosModule { }
