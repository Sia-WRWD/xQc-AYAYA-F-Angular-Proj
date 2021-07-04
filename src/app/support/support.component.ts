import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { supportDetails } from './../shared/models/support';
import { EnrollmentService } from '../enrollment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  template: ` <button class="btn btn--right btn--blackwhite" (click)="goToPage('Update')">Update</button>
  <div class="support-wrapper">
  <div class="title-container">
      <h1 class="title">Contact xQc!</h1>
  </div>

  <form class="form-container" *ngIf="!submitted" (ngSubmit)="f.form.valid && onprocessForm(f)" #f="ngForm" name="support-form" novalidate>
      <label class="label">Name</label><br>
      <input type="text" name="name" id="name" class="input" placeholder="What's Your Name?" required  maxlength="20" minlength="2" [(ngModel)]="supportModel.name" #nameCtrl="ngModel"><br>

      <div *ngIf="nameCtrl.errors && (nameCtrl.dirty || nameCtrl.touched || f.submitted)" class="error-msg">
        <p *ngIf="nameCtrl.errors.required">
          Name is Required!
        </p>
        <p *ngIf="nameCtrl.errors.minlength">
          Name Should be More than 2 Characters!
        </p>
        <p *ngIf="nameCtrl.errors.maxlength">
          Name Should not Exceed 20 Characters!
        </p>
      </div>

      <label class="label">Email</label><br>
      <input type="email" name="email" id="email" class="input" placeholder="What's Your Email?" [(ngModel)]="supportModel.email" required email #emailCtrl="ngModel"><br>

      <div style="color:red" *ngIf="emailCtrl.errors && (emailCtrl.dirty || emailCtrl.touched || f.submitted)" class="error-msg">
        <p *ngIf="emailCtrl.errors.required">
          Email is Required!
        </p>
        <p *ngIf="emailCtrl.errors.email">
          Email Provided is Invalid!
        </p>
      </div>

      <label class="label">Message</label><br>
      <textarea name="message" id="message" class="textarea" placeholder="What Would You Like to Tell xQc?" [(ngModel)]="supportModel.message" required maxlength="100" minlength="10" #messageCtrl="ngModel"></textarea><br>

      <div style="color:red" *ngIf="messageCtrl.errors && (messageCtrl.dirty || messageCtrl.touched || f.submitted)" class="error-msg">
        <p *ngIf="messageCtrl.errors.required">
          Message is Required!
        </p>
        <p *ngIf="messageCtrl.errors.minlength">
          Message Should be More than 10 Characters!
        </p>
        <p *ngIf="messageCtrl.errors.maxlength">
          Message Should not Exceed 100 Characters!
        </p>
      </div>

      <button type="submit" class="btnSubmit">
          Send
      </button>
  </form>
</div>`,

  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  submitted = false;

  supportModel = new supportDetails();

  constructor(private _enrollmentService: EnrollmentService, private router: Router) {

  }

  ngOnInit() {
    
  }

  onprocessForm(f: NgForm) {
    const allInfo = `My name is ${this.supportModel.name}. My email is ${this.supportModel.email}. My message to Support Team is "${this.supportModel.message}".`;
    alert(allInfo);
    this.submitted = true;
    this._enrollmentService.enroll(this.supportModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error) 
      )
      f.resetForm();
      this.router.navigate(['Home']);
  }

  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

}
