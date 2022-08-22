import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  // formData!: FormGroup;
  
  // constructor() { }

  ngOnInit(): void {
    // this.createForm();
  }
  // createForm() {
  //   this.formData = new FormGroup({
  //     email: new FormControl('', [
  //       Validators.email
  //     ]),
  //     password: new FormControl('', [
  //       Validators.required
  //     ])
  //   })
  // }

  // onSubmit(form: any){
  //   console.log(form);
  // }

}
