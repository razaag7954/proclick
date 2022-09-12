import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OshatypesService } from 'src/app/services/oshaServices/oshatypes.service';
import { ProfiletypeservicesService } from 'src/app/services/profileTypesServices/profiletypeservices.service';


@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  formData!: FormGroup;
  ohsaType!: Array<Object>;
  profileType!: Array<Object>;

  constructor(
    private oshaTypes: OshatypesService,
    private profileTypes: ProfiletypeservicesService
  ) { }

  ngOnInit(): void {
    this.createForm();

    // api call for get osha types
    this.oshaTypes.getOshaTypes().subscribe((data) => {
      this.ohsaType = JSON.parse(JSON.stringify(data));
    });

    // api call for get profile types
    this.profileTypes.getProfileTypes().subscribe((data) => {
      this.profileType = JSON.parse(JSON.stringify(data));
    })
  }
  createForm() {
    this.formData = new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.email
      ]),
      profileType: new FormControl('', [
        Validators.required
      ]),
      oshaType: new FormControl('', [
        Validators.required
      ])
    })
  }

  onSubmit(form: any) {
    console.log(form);
  }
}
