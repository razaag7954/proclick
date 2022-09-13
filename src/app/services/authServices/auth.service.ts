import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../notificationServices/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = environment.BASE_URL;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$;
  constructor(
    private router: Router,
    private http: HttpClient,
    private notifyService: NotificationService
  ) {
    const token = localStorage.getItem('authToken');
    this._isLoggedIn$.next(!!token)
  }


  logIn(data: any) {
    this.http.post(`${this.apiURL}apis/auth/login`, data).subscribe(
      (result: any) => {
        localStorage.setItem('authToken', result['token']);
        localStorage.setItem('userName', `${result.user['firstName']} ${result.user['lastName']}`);
        localStorage.setItem('userEmail', result.user['email'])
        this._isLoggedIn$.next(true);
        this.router.navigateByUrl('/dashboard/home');
        this.notifyService.showSuccess("Successfully Loged In", "Success")
      },
      (error) => {
        this.notifyService.showError(error.error.errMessage, "Error")
        console.log(error.error.errMessage, "this is error");
      }
    )
  }

  signUp(data: any) {
    return this.http.post(`${this.apiURL}apis/auth/singup`, data).subscribe(
      (result) => {
        console.log(result, "this is my result");
        this.notifyService.showSuccess("Successfully SignUp", "Success");
        this.router.navigateByUrl('/auth/login');
      }, 
      (error) => {
        console.log(error, "error");
        
        this.notifyService.showError(error.error.errMessage, "Error")
      }
    );
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    this.router.navigateByUrl('/auth/login')
  }
}
