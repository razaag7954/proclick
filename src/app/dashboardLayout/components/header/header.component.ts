import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authServices/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName : String | null;
  email :String | null;
  constructor(private auth: AuthService) { 
    this.userName =  localStorage.getItem('userName');
    this.email = localStorage.getItem('userEmail');
  }
  
  ngOnInit(): void {
  }

  handleLogout(){
    this.auth.logout();
  }
}
