import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formData!: FormGroup;
  
  constructor(private router: Router) { }

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
      password: new FormControl('', [
        Validators.required
      ]),
      oshno: new FormControl('', [
        Validators.required
      ]),
    })
  }

  onSubmit(form: any){
    console.log(form);
    this.router.navigateByUrl('/auth/account-varification');
  }


}
