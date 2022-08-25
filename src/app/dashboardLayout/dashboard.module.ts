import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { DocumentComponent } from './components/document/document.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ImagePopupComponent } from './components/image-popup/image-popup.component';
import { InviteComponent } from './components/invite/invite.component';
import { ListofdocumentComponent } from './components/listofdocument/listofdocument.component';
import { PdfPopupComponent } from './components/pdf-popup/pdf-popup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SitesComponent } from './components/sites/sites.component';
import { DashboardComponent } from './dashboard.component';
import { ListofprofileComponent } from './components/listofprofile/listofprofile.component';
import { ListofsitesComponent } from './components/listofsites/listofsites.component';
import { AddSitePopupComponent } from './components/add-site-popup/add-site-popup.component';
import { AddBulkProfilePopupComponent } from './components/add-bulk-profile-popup/add-bulk-profile-popup.component';

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
    ListofprofileComponent,
    ListofsitesComponent,
    AddSitePopupComponent,
    AddBulkProfilePopupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
