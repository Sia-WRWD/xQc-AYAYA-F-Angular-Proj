import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  Data:any;

  constructor(private _http: HttpClient) { }

  public getData()  {
    return this._http.get<any>
    ('//localhost:3000/fetch');
  }
}
