import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddBulkProfilePopupComponent } from '../add-bulk-profile-popup/add-bulk-profile-popup.component';
export interface PeriodicElement {
  id: number;
  name: string;
  oshano: string;
  profileType: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Sub'},
  {id: 2, name: 'Kathryn longford', oshano: '93467826JH87876', profileType: 'Worker'},
  {id: 3, name: 'Kathryn Murphy', oshano: '9346782dee87876', profileType: 'Admin'},
  {id: 4, name: 'Albert Flores', oshano: '93467826JH87876', profileType: 'Sub'},
  {id: 5, name: 'Kathryn Murphy', oshano: '93467826JdweH87876', profileType: 'Worker'},
  {id: 6, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Sub'},
  {id: 7, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Worker'},
  {id: 8, name: 'Kathryn Murphy', oshano: '934678eJH87876', profileType: 'Admin'},
  {id: 9, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Sub'},
  {id: 10, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Worker'},
  {id: 11, name: 'Kathryn Murphy', oshano: '9346782eH87876', profileType: 'Sub'},
  {id: 12, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Admin'},
  {id: 13, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Worker'},
  {id: 14, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Sub'},
  {id: 15, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Worker'},
  {id: 16, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Sub'},
  {id: 17, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Sub'},
  {id: 18, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Worker'},
  {id: 19, name: 'Kathryn Murphy', oshano: '93467826JH87876', profileType: 'Worker'},
];
@Component({
  selector: 'app-listofprofile',
  templateUrl: './listofprofile.component.html',
  styleUrls: ['./listofprofile.component.css']
})
export class ListofprofileComponent implements OnInit {

  displayedColumns: string[] = ['checkbox', 'name', 'oshano','profileType','remove'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor( private router: Router, private dialogRef: MatDialog ) { }

  openDialog() {
    this.dialogRef.open( AddBulkProfilePopupComponent, { width: '900px', height: 'auto', panelClass: 'add-bulk-profile-modal-container' } )
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

  remove(row: any){
    console.log("remove function call"); 
  }
  goToAddProfile() {
    this.router.navigateByUrl( '/dashboard/addProfile' );
  }

}
