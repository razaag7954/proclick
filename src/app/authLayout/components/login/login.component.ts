import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData!: FormGroup;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formData = new FormGroup({
      email: new FormControl('', [
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  onSubmit(form: any){
    this.router.navigateByUrl('/dashboard/home');
  }

}
