import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfiletypeservicesService {

  constructor(private http: HttpClient) { }

  getProfileTypes() {
    let url = "https://nodecrud-apis.herokuapp.com/profile";
    return this.http.get(url);
  }
}
