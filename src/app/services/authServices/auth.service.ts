import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = environment.BASE_URL;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$;
  constructor(private router: Router,private http: HttpClient) { 
    const token = localStorage.getItem('authToken');
    this._isLoggedIn$.next(!!token)
  }


  logIn( data: any ) { 
    this.http.post(`${this.apiURL}apis/auth/login`, data).subscribe((result:any) => {
        localStorage.setItem('authToken', result['token']);
        localStorage.setItem('userName', `${result['firstName']} ${result['lastName']}`);
        localStorage.setItem('userEmail', result['email'])
        this._isLoggedIn$.next(true);
        this.router.navigateByUrl('/dashboard/home');
    })
  }

  signUp( data:any ) {
    return this.http.post(`${this.apiURL}apis/auth/singup`, data);
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    this.router.navigateByUrl('/auth/login')
  }
}
