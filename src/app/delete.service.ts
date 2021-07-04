import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { deleteDetails } from './shared/models/delete';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  _url = 'http://localhost:3000/delete';
  constructor(private _http: HttpClient) { }

  delete(deleteTicket: deleteDetails) {
    return this._http.post<any>(this._url, deleteTicket);
  }
}
