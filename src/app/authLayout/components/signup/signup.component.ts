import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from 'src/app/services/authServices/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formData!: FormGroup;
  
  constructor(private router: Router, private authService: AuthService) { }

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
      oshaNumber: new FormControl('', [
        Validators.required
      ]),
    })
  }

  onSubmit(form: any){
    const data = form;
    this.authService.signUp(data).subscribe(result => {
      console.log(result, "this is my result");
    })
    this.router.navigateByUrl('/auth/account-varification');
  }


}
