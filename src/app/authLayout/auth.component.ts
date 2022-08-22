import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document?.querySelector('body')?.classList.add('auth');
  }
  ngOnDestroy() {
    document?.querySelector('body')?.classList.remove('auth');
  }

}
