import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfiletypeservicesService {
  apiURL = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  getProfileTypes() {
    let url = `${this.apiURL}apis/profile_types`;
    return this.http.get(url);
  }
}
