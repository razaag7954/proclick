import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'AuthScreenHeader',
  templateUrl: './auth-screen-header.component.html',
  styleUrls: ['./auth-screen-header.component.css']
})
export class AuthScreenHeaderComponent {
  @Input() header: string = ''

  @Input() description: string = ''
  @Input() email: string = ''
}
