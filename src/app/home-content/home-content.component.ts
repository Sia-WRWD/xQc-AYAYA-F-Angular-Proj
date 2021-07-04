import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})

export class HomeContentComponent implements OnInit {

  constructor(private router: Router) {
    
  }

  goToPage1(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit() {

  }

}
