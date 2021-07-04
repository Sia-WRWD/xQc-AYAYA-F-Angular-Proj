import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';


@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  fetchData:any = [];

  constructor(private _fetchService: FetchService) { }

  ngOnInit() {
    this._fetchService.getData().subscribe((res) => {
      this.fetchData = res;
      console.log(this.fetchData);
    }, (error) => {
      console.log('Error is ', error);
    });
  }

}
