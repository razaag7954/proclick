import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DocumentComponent } from './components/document/document.component';
import { HeaderComponent } from './components/header/header.component';
import { InviteComponent } from './components/invite/invite.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SitesComponent } from './components/sites/sites.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    DocumentComponent,
    ReportsComponent,
    InviteComponent,
    ProfileComponent,
    SitesComponent,
    HomeComponent,
    AddProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
