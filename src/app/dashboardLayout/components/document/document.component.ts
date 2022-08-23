import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PdfPopupComponent } from '../pdf-popup/pdf-popup.component';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  formData!: FormGroup;
  
  constructor( private router: Router, private dialogRef: MatDialog ) { }

  openDialog() {
    this.dialogRef.open( PdfPopupComponent, { width: '80vw', height: '80vh', panelClass: 'pdf-dialog' } );
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formData = new FormGroup( {
      docName: new FormControl( '', [ Validators.required ] ),
      docType: new FormControl( '', [ Validators.required ] )
    } );
  };

  onSubmit( form: any ) {
    this.router.navigateByUrl( '/dashboard/home' );
  };

  handleAllDocuments() {
    this.router.navigateByUrl( '/dashboard/document-list' );
  }

}
