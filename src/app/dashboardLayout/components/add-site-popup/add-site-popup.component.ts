import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component( {
  selector: 'app-add-site-popup',
  templateUrl: './add-site-popup.component.html',
  styleUrls: [ './add-site-popup.component.css' ]
} )

export class AddSitePopupComponent implements OnInit {

  formData!: FormGroup;

  constructor( private dialogRef: MatDialogRef<AddSitePopupComponent> ) { }

  closeDialog() {
    this.dialogRef.close();
  };

  ngOnInit(): void {
    this.createForm();
  };

  createForm() {
    this.formData = new FormGroup( {
      siteName: new FormControl( '', [ Validators.required ] ),
      siteAddress: new FormControl( '', [ Validators.required ] ),
      city: new FormControl( '', [ Validators.required ] ),
      state: new FormControl( '', [ Validators.required ] ),
      zipCode: new FormControl( '', [ Validators.required ] )
    } );
  };

  onSubmit( form: any ) {
    this.closeDialog();
  };

  states = [
    { id: 1, name: 'California' },
    { id: 2, name: 'Texas' },
    { id: 3, name: 'Florida' },
    { id: 4, name: 'Virginia' },
  ];

  zipCodes = [
    { id: 1, name: '15417' },
    { id: 2, name: '15419' },
    { id: 3, name: '15423' },
    { id: 4, name: '15427' },
  ];

};