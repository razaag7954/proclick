import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  formData!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
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
