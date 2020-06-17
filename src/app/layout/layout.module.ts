import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthModule} from '../system/auth/auth.module';
import {ModelModule} from '../data/model.module';
import {LoaderModule} from '../common/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    ModelModule,

  ],
  declarations: [

  ],
  exports: [
  ]
})
export class LayoutModule {
}
