import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OshatypesService } from 'src/app/services/oshaServices/oshatypes.service';
import { ProfiletypeservicesService } from 'src/app/services/profileTypesServices/profiletypeservices.service';
import { ImagePopupComponent } from '../image-popup/image-popup.component';

@Component( {
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: [ './add-profile.component.css' ]
} )

export class AddProfileComponent implements OnInit {
  OSHANumFormData!: FormGroup;
  OSHAExpFormData!: FormGroup;
  formData!: FormGroup;
  ohsaType!: Array<Object>;
  profileType!: Array<Object>;

  showOSHANum: boolean = false;
  showOSHAExp: boolean = false;

  photoID: string = '';
  OSHACard: string = '';

  handleGetPhotoID( event: any ) {
    this.photoID = URL.createObjectURL( event.target.files[ 0 ] );
  };

  handleGetOSHACard( event: any ) {
    this.OSHACard = URL.createObjectURL( event.target.files[ 0 ] );
  };

  toggleShowOSHANum() {
    if ( this.showOSHANum ) {
      this.showOSHANum = false;
    } else {
      this.showOSHANum = true;
    }
  };

  toggleShowOSHAExp() {
    if ( this.showOSHAExp ) {
      this.showOSHAExp = false;
    } else {
      this.showOSHAExp = true;
    }
  };

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
    this.createOSHANumForm();
    this.createOSHAExpForm();
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

  createOSHANumForm() {
    this.OSHANumFormData = new FormGroup( {
      OSHANumber: new FormControl( 'ABCS0245', [ Validators.required ] ),
    } );
  };

  createOSHAExpForm() {
    this.OSHAExpFormData = new FormGroup( {
      OSHAExpiration: new FormControl( '2022-01-01', [ Validators.required ] ),
    } );
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

  onOSHANumSubmit( form: any ) {
    this.toggleShowOSHANum();
  };

  onOSHAExpSubmit( form: any ) {
    this.toggleShowOSHAExp();
  };

  onSubmit( form: any ) {
    this.router.navigateByUrl( '/dashboard/home' );
  };
  goToListOfProfile() {
    this.router.navigateByUrl( '/dashboard/profile' );
  }

  goToAllDocument() {
    this.router.navigateByUrl( '/dashboard/document-list' );
  }

}
