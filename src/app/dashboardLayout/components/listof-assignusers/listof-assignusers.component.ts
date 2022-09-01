import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddSitePopupComponent } from '../add-site-popup/add-site-popup.component';
export interface PeriodicElement {
  id: number;
  name: string;
  osha: string;
  oshaExp: string;
  oshaType: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 2,  name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 1,  name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 3,  name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 4,  name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 5,  name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 6,  name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 7,  name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 8,  name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 9,  name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 10, name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 11, name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 12, name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 13, name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 14, name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 15, name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 16, name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 17, name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 18, name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
  {id: 19, name: 'Kathryn Murphy', osha: '93482346', oshaExp: '34658349889', oshaType: '34658349889'},
];
@Component({
  selector: 'app-listof-assignusers',
  templateUrl: './listof-assignusers.component.html',
  styleUrls: ['./listof-assignusers.component.css']
})
export class ListofAssignusersComponent implements OnInit {
  displayedColumns: string[] = ['checkbox', 'name', 'osha','oshaExp','oshaType', 'assign'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor( private router: Router, private dialogRef: MatDialog ) { }

  openDialog() {
    this.dialogRef.open( AddSitePopupComponent, { width: '900px', height: 'auto', panelClass: 'add-site-modal-container' } );
  };

 

  ngOnInit(): void {
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  FilterChange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  assignUser(element: any ){
    console.log(element)
  }

}
