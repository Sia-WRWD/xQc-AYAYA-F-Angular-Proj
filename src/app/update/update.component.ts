import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { updateDetails } from './../shared/models/update';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  template: ` <button class="btn btn--right btn--blackwhite" (click)="goToPage('Delete')">Delete</button>
  <div class="support-wrapper">
  <div class="title-container">
      <h1 class="title">Update Message</h1>
  </div>

  <form class="form-container" *ngIf="!submitted" (ngSubmit)="f.form.valid && onprocessForm(f)" #f="ngForm" name="support-form" novalidate>
      <label class="label">Email</label><br>
      <input type="email" name="email" id="email" class="input" placeholder="What's Your Email?" [(ngModel)]="updateModel.up_email" required email #emailCtrl="ngModel"><br>

      <div style="color:red" *ngIf="emailCtrl.errors && (emailCtrl.dirty || emailCtrl.touched || f.submitted)" class="error-msg">
        <p *ngIf="emailCtrl.errors.required">
          Email is Required!
        </p>
        <p *ngIf="emailCtrl.errors.email">
          Email Provided is Invalid!
        </p>
      </div>

      <label class="label">Message</label><br>
      <textarea name="message" id="message" class="textarea" placeholder="What Would You Like to Share?" [(ngModel)]="updateModel.up_message" required maxlength="100" minlength="10" #messageCtrl="ngModel"></textarea><br>

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
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  submitted = false;

  updateModel = new updateDetails();

  constructor(private _updateService: UpdateService, private router: Router) {

  }

  ngOnInit(): void {

  }

  onprocessForm(f: NgForm) {
    const allInfo = `My email is ${this.updateModel.up_email}. My message to Support Team is "${this.updateModel.up_message}".`;
    alert(allInfo);
    this.submitted = true;
    this._updateService.update(this.updateModel)
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
