import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authServices/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData!: FormGroup;
  
  constructor(private router: Router, private authService: AuthService) { }

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
    this.authService.logIn("hifrom")
    this.router.navigateByUrl('/dashboard/home');
  }

}
