import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SignUpComponent, LoginComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AngularFireAuthModule,
    SharedModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
