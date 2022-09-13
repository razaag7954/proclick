import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './authLayout/auth.module';
import { DashboardModule } from './dashboardLayout/dashboard.module';
import { DndDirective } from './directives/dnd.directive';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DndDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      maxOpened: 1,
      autoDismiss: true,
      enableHtml: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
