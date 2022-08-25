import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  id: number;
  docName: string;
  workerName: string;
  subName: string;
  signatureStatus: string;
  docType: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
  {id: 1, docName: 'abcdefghi.pdf',workerName: 'Kathryn Murphy', subName: 'Kathryn', signatureStatus: 'Signed', docType: 'Orientation Doc'},
];
@Component({
  selector: 'app-listofdocument',
  templateUrl: './listofdocument.component.html',
  styleUrls: ['./listofdocument.component.css']
})
export class ListofdocumentComponent implements OnInit {

  displayedColumns: string[] = ['checkbox', 'docName', 'workerName', 'subName', 'signatureStatus','docType', 'resend'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() { }

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

  resend(row: any){
    console.log("resend function call");
    
  }

}
