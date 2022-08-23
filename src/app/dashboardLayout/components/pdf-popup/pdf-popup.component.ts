import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pdf-popup',
  templateUrl: './pdf-popup.component.html',
  styleUrls: ['./pdf-popup.component.css']
})
export class PdfPopupComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<PdfPopupComponent> ) { }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
