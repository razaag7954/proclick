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
    this._isLoggedIn$.next(true);
    localStorage.setItem('authToken', "thisis token")
    // this.http.post("adsfasd", data).pipe(
    //   tap((response) => {
    //     localStorage.setItem('authToken', "thisis token")
    //     this._isLoggedIn$.next(true);
    //     console.log(response);

    //   })
    // );
  }

  signUp( data:any ) {
    return this.http.post(`${this.apiURL}apis/auth/singup`, data);
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('authToken');
    this.router.navigateByUrl('/auth/login')
  }
}
