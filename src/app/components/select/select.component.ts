import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'MySelectComponent',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() selectedValue!: number;
  @Input() options!: Array<Object>;
  @Input() placeholder:string = "Select";
  @Input() control! : FormControl;
  constructor() { }

  ngOnInit(): void {
  }

  displayErrors() {
    const {dirty, touched, errors} = this.control;

    return dirty && touched && errors;
  }

}
