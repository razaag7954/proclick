import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  apiURL = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  getAllProfile(): Observable<any> {
    let url = `${this.apiURL}apis/profile`;
    return this.http.get(url);
  }
}
