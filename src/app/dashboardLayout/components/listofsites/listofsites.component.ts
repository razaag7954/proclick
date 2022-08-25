import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
export interface PeriodicElement {
  id: number;
  siteAddress: string;
  subAttached: string;
  workerAttached: string;
  docSigned: string;
  docSignedForSub: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 2,  siteAddress: 'Ka34 Old, Bond St, London UK' ,subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'signed'},
  {id: 1,  siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'signed'},
  {id: 3,  siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'not signed'},
  {id: 4,  siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'not signed'},
  {id: 5,  siteAddress: '34 Old, Bond St, London UK', subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'signed'},
  {id: 6,  siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'not signed'},
  {id: 7,  siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'signed'},
  {id: 8,  siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'signed'},
  {id: 9,  siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'not signed'},
  {id: 10, siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'signed'},
  {id: 11, siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'not signed'},
  {id: 12, siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'signed'},
  {id: 13, siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'not signed'},
  {id: 14, siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'signed'},
  {id: 15, siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'not signed'},
  {id: 16, siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'signed'},
  {id: 17, siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'not signed'},
  {id: 18, siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'signed'},
  {id: 19, siteAddress: '34 Old, Bond St, London UK',  subAttached: '93482346', workerAttached: '34658349889', docSigned: '34658349889', docSignedForSub: 'not signed'},
];
@Component({
  selector: 'app-listofsites',
  templateUrl: './listofsites.component.html',
  styleUrls: ['./listofsites.component.css']
})
export class ListofsitesComponent implements OnInit {

  displayedColumns: string[] = ['checkbox', 'siteAddress', 'addUsers','subAttached','workerAttached','docSigned','docSignedForSub','delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor( private router: Router) { }

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

  remove(row: any){
    console.log("remove function call"); 
  }
  goToAddProfile() {
    this.router.navigateByUrl( '/dashboard/addProfile' );
  }

  goToDocument(element: any){
    this.router.navigateByUrl( '/dashboard/document-list' );
  }

}
