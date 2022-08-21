import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'AuthScreenFooter',
  templateUrl: './auth-screen-footer.component.html',
  styleUrls: ['./auth-screen-footer.component.css']
})
export class AuthScreenFooterComponent implements OnInit {
  @Input() rightText: string = ''
  @Input() link: string = '#'
  @Input() isPadding:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
