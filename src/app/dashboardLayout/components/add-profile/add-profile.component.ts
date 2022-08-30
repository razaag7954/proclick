import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { OshatypesService } from 'src/app/services/oshatypes.service';
@Component( {
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: [ './add-profile.component.css' ]
} )

export class AddProfileComponent implements OnInit {

  formData!: FormGroup;
  ohsaType!: Array<Object>;
  constructor( private router: Router, private dialogRef: MatDialog, private oshaTypes:OshatypesService ) { 
   
  }



  openDialog() {
    this.dialogRef.open( ImagePopupComponent, { panelClass: 'image-modal-container' } );
  };

  ngOnInit(): void {
    this.createForm();
    this.oshaTypes.getOshaTypes().subscribe((data)=>{
      this.ohsaType = JSON.parse(JSON.stringify(data));
    })
  };

  createForm() {
    this.formData = new FormGroup( {
      firstName: new FormControl( '', [ Validators.required ] ),
      lastName: new FormControl( '', [ Validators.required ] ),
      title: new FormControl( '', [ Validators.required ] ),
      businessName: new FormControl( '', [ Validators.required ] ),
      businessCategory: new FormControl( '', [ Validators.required ] ),
      contractorId: new FormControl( '', [ Validators.required ] ),
      address: new FormControl( '', [ Validators.required ] ),
      city: new FormControl( '', [ Validators.required ] ),
      state: new FormControl( '', [ Validators.required ] ),
      country: new FormControl( '', [ Validators.required ] ),
      phoneNumber: new FormControl( '', [ Validators.required ] ),
      profileType: new FormControl( '', [ Validators.required ] ),
      oshaType: new FormControl( '', [ Validators.required ] )
    } );
  };

  onSubmit( form: any ) {
    this.router.navigateByUrl( '/dashboard/home' );
  };
  goToListOfProfile() {
    this.router.navigateByUrl( '/dashboard/profile' );
  }
  profileType = [
    { id: 1, name: 'Pm Super' },
    { id: 2, name: 'GC' },
    { id: 3, name: 'Sub' },
    { id: 4, name: 'Worker' },
    { id: 5, name: 'Admin' },
  ];
  // ohsaType = [{"_id":"630db91d22a5016c4c6aa072","name":"Volvo","__v":0},{"_id":"630db92a22a5016c4c6aa074","name":"Saab","__v":0},{"_id":"630db93322a5016c4c6aa076","name":"Opel","__v":0}]
}