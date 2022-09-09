import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OshatypesService {
  apiURL = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  getOshaTypes() {
    let url = `${this.apiURL}apis/osha_types`;
    return this.http.get(url);
  }
}
