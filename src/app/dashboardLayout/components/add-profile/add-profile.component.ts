import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OshatypesService } from 'src/app/services/oshaServices/oshatypes.service';
import { ProfiletypeservicesService } from 'src/app/services/profileServices/profiletypeservices.service';
import { ImagePopupComponent } from '../image-popup/image-popup.component';

@Component( {
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: [ './add-profile.component.css' ]
} )

export class AddProfileComponent implements OnInit {

  formData!: FormGroup;
  ohsaType!: Array<Object>;
  profileType!: Array<Object>;
  constructor( 
    private router: Router, 
    private dialogRef: MatDialog, 
    private oshaTypes:OshatypesService,
    private profileTypes: ProfiletypeservicesService 
    ) { 
   
  }



  openDialog() {
    this.dialogRef.open( ImagePopupComponent, { panelClass: 'image-modal-container' } );
  };

  ngOnInit(): void {
    this.createForm();
    
    // api call for get osha types
    this.oshaTypes.getOshaTypes().subscribe((data)=>{
      this.ohsaType = JSON.parse(JSON.stringify(data));
    });

    // api call for get profile types
    this.profileTypes.getProfileTypes().subscribe((data)=>{
      this.profileType = JSON.parse(JSON.stringify(data));
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
  
}