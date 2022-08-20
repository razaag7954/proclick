import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
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
        Validators.required
      ])
    })
  }

  onSubmit(form: any){
    console.log(form);
    
  }

}
