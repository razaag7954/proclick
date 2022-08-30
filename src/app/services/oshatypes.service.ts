import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OshatypesService {

  constructor(private http: HttpClient) { }

  getOshaTypes() {
    let url = "https://nodecrud-apis.herokuapp.com/users";
    return this.http.get(url);
  }
}
