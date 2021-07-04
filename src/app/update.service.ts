import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { updateDetails } from './shared/models/update';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  _url = 'http://localhost:3000/update';
  constructor(private _http: HttpClient) { }

  update(updateTicket: updateDetails) {
    return this._http.post<any>(this._url, updateTicket);
  }
}
