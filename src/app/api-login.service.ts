import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(private _http: HttpClient) { }

  apiURL = 'http://localhost:5000';

  getApiLogin(formData: any) {
    return this._http.get(this.apiURL+'/users', formData);
  }
}