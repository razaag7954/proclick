import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authServices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {    }
  canActivate(){
    if(this.auth.isLoggedIn$.getValue()){
      return true;
    }
    this.router.navigateByUrl( '/auth/login' );
    return false;

  }
}
