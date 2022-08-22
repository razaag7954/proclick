import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountvarification',
  templateUrl: './accountvarification.component.html',
  styleUrls: ['./accountvarification.component.css']
})
export class AccountvarificationComponent implements OnInit {
  email:string = 'companyname@gmail.com';
  isButtonDisable: boolean = true
  formData!: FormGroup;
  code:string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formData = new FormGroup({
      code: new FormControl('', [
        Validators.required
      ])
    })
  }

  onSubmit(form: any){
    console.log(this.code); 
    this.router.navigateByUrl('/auth/login'); 
  }
    // this called every time when user changed the code
    onCodeChanged(code: string) {
      this.code = code;
    }
  
    // this called only if user entered full code
    onCodeCompleted(code: string) {
      this.isButtonDisable = false;
    }

}
