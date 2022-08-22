import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component( {
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: [ './add-profile.component.css' ]
} )

export class AddProfileComponent implements OnInit {

  formData!: FormGroup;
  
  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.createForm();
  }
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
      profileType: new FormControl( '', [ Validators.required ] )
    } );
  };

  onSubmit( form: any ) {
    this.router.navigateByUrl( '/dashboard/home' );
  };

  profileType = [
    { id: 1, name: 'Pm Super' },
    { id: 2, name: 'GC' },
    { id: 3, name: 'Sub' },
    { id: 4, name: 'Worker' },
    { id: 5, name: 'Admin' },
  ];

  ohsaType = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' }
  ];
}