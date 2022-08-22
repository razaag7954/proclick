import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AccountvarificationComponent } from './components/accountvarification/accountvarification.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SignupComponent } from './components/signup/signup.component';




@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    AccountvarificationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class AuthModule { }
