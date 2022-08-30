import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-pdf-popup',
  templateUrl: './pdf-popup.component.html',
  styleUrls: ['./pdf-popup.component.css']
})
export class PdfPopupComponent implements OnInit {

  file: string = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor( 
    private dialogRef: MatDialogRef<PdfPopupComponent>,
  ) { }

  downloadPDF( fileURL: string ) {
    const fileName = fileURL.split( '/' ).pop();
    saveAs( fileURL, fileName );
  };

  openPDF( fileURL: string ) {
    window.open( fileURL );
  };

  closeDialog() {
    this.dialogRef.close();
  };

  ngOnInit(): void {
  }

}
