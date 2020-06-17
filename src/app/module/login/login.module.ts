import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../../data/model.module';
import { AuthModule } from '../../system/auth/auth.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModelModule,
    AuthModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSliderModule,
  ],
  providers: [LoginService],
  declarations: [LoginComponent],
  exports: [LoginComponent, MatFormFieldModule]
})
export class LoginModule {
}
