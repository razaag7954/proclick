import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DocumentComponent } from './components/document/document.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InviteComponent } from './components/invite/invite.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SitesComponent } from './components/sites/sites.component';
import { DashboardComponent } from './dashboard.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { ImagePopupComponent } from './components/image-popup/image-popup.component';
import { PdfPopupComponent } from './components/pdf-popup/pdf-popup.component';
import { ListofdocumentComponent } from './components/listofdocument/listofdocument.component';

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
    AddProfileComponent,
    ImagePopupComponent,
    PdfPopupComponent,
    ListofdocumentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
