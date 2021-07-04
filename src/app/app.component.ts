import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare const plusSlides:any;
declare const currentSlide:any;
declare const showSlides:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myScriptElement: HTMLScriptElement; 

  constructor (private router: Router) {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "../assets/slideshow.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit() {
    this.router.navigate(['Home']);
  }


}
