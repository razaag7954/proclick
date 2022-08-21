import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  formData!: FormGroup;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formData = new FormGroup({
      password: new FormControl('', [
        Validators.required
      ]),
      confirmPassword:new FormControl('', [
        Validators.required
      ]),
    })
  }

  onSubmit(form: any){
    console.log(form);
    this.router.navigateByUrl('/dashboard/home');
  }

}
