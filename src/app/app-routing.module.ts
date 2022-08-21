import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from "./components/home/home.component";

import { SignupComponent } from './auth/components/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './auth/components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './auth/components/resetpassword/resetpassword.component';
import { AccountvarificationComponent } from './auth/components/accountvarification/accountvarification.component';
const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: 'auth', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent,
    children:[
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'forgetpassword', component: ForgetpasswordComponent},
      {path: 'resetpassword', component: ResetpasswordComponent},
      {path: 'account-varification', component: AccountvarificationComponent},
    ]
  },
  {path: 'dashboard', redirectTo: 'dashboard/home', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent,
    children:[
      {path: 'home', component: HomeComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
