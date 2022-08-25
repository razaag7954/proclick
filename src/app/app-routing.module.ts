import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authLayout/auth.component';
import { LoginComponent } from './authLayout/components/login/login.component';
import { AccountvarificationComponent } from './authLayout/components/accountvarification/accountvarification.component';
import { ForgetpasswordComponent } from './authLayout/components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './authLayout/components/resetpassword/resetpassword.component';
import { SignupComponent } from './authLayout/components/signup/signup.component';
import { DocumentComponent } from './dashboardLayout/components/document/document.component';
import { InviteComponent } from './dashboardLayout/components/invite/invite.component';
import { ProfileComponent } from './dashboardLayout/components/profile/profile.component';
import { ReportsComponent } from './dashboardLayout/components/reports/reports.component';
import { SitesComponent } from './dashboardLayout/components/sites/sites.component';
import { DashboardComponent } from './dashboardLayout/dashboard.component';
import { HomeComponent } from './dashboardLayout/components/home/home.component';
import { AddProfileComponent } from './dashboardLayout/components/add-profile/add-profile.component';
import { ListofdocumentComponent } from './dashboardLayout/components/listofdocument/listofdocument.component';
import { ListofprofileComponent } from './dashboardLayout/components/listofprofile/listofprofile.component';

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
      { path: 'home', component: HomeComponent },
      { path: 'documents', component: DocumentComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'invite', component: InviteComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'addProfile', component: AddProfileComponent },
      { path: 'sites', component: SitesComponent },
      { path: 'document-list', component: ListofdocumentComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
