import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';
import { AuthScreenContainerComponent } from '../components/auth-screen-container/auth-screen-container.component';
import { AuthScreenFormContainerComponent } from '../components/auth-screen-form-container/auth-screen-form-container.component';
import { AuthScreenHeaderComponent } from '../components/auth-screen-header/auth-screen-header.component';
import { AuthScreenFooterComponent } from '../components/auth-screen-footer/auth-screen-footer.component';
import { InputComponent } from '../components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { CodeInputModule } from 'angular-code-input';
import { SelectComponent } from '../components/select/select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatatableComponent } from '../components/datatable/datatable.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ButtonComponent,
    AuthScreenContainerComponent,
    AuthScreenFormContainerComponent,
    AuthScreenHeaderComponent,
    AuthScreenFooterComponent,
    InputComponent,
    SelectComponent,
    DatatableComponent
  ],
  exports:[
    ButtonComponent,
    AuthScreenContainerComponent,
    AuthScreenFormContainerComponent,
    AuthScreenHeaderComponent,
    AuthScreenFooterComponent,
    InputComponent,
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
    NgSelectModule,
    DatatableComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    CodeInputModule,
    NgSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
