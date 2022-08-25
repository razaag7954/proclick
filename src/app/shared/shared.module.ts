import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { CodeInputModule } from 'angular-code-input';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AuthScreenContainerComponent } from '../components/auth-screen-container/auth-screen-container.component';
import { AuthScreenFooterComponent } from '../components/auth-screen-footer/auth-screen-footer.component';
import { AuthScreenFormContainerComponent } from '../components/auth-screen-form-container/auth-screen-form-container.component';
import { AuthScreenHeaderComponent } from '../components/auth-screen-header/auth-screen-header.component';
import { ButtonComponent } from '../components/button/button.component';
import { DividerComponent } from '../components/divider/divider.component';
import { InputComponent } from '../components/input/input.component';
import { SelectComponent } from '../components/select/select.component';

@NgModule({
  declarations: [
    ButtonComponent,
    AuthScreenContainerComponent,
    AuthScreenFormContainerComponent,
    AuthScreenHeaderComponent,
    AuthScreenFooterComponent,
    InputComponent,
    DividerComponent,
    SelectComponent
  ],
  exports:[
    RouterModule,
    ButtonComponent,
    AuthScreenContainerComponent,
    AuthScreenFormContainerComponent,
    AuthScreenHeaderComponent,
    AuthScreenFooterComponent,
    InputComponent,
    DividerComponent,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    CodeInputModule,
    SelectComponent,
    MatGridListModule,
    MatDialogModule,
    NgSelectModule,
    PdfViewerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    CodeInputModule,
    PdfViewerModule,
    NgSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,

  ]
})
export class SharedModule { }
