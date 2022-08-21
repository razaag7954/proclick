import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  formData!: FormGroup;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formData = new FormGroup({
      email: new FormControl('', [
        Validators.email
      ])
    })
  }

  onSubmit(form: any){
    console.log(form);
    this.router.navigateByUrl('/auth/resetpassword');
  }


}
