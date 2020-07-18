import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { WebRoutes } from './web.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {Md5} from "ts-md5";
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NosotrosComponent} from "./nosotros/nosotros.component";
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [WebComponent, HomeComponent, NosotrosComponent,  ],
  imports: [
    WebRoutes,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [
    Md5
  ],
})
export class WebModule { }
