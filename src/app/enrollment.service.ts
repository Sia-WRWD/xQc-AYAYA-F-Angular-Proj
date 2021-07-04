import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { supportDetails } from './shared/models/support';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }

  enroll(supportTicket: supportDetails) {
    return this._http.post<any>(this._url, supportTicket);
  }
}
