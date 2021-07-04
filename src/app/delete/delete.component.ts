import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { deleteDetails } from './../shared/models/delete';
import { DeleteService } from '../delete.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  template: `<div class="support-wrapper">
  <div class="title-container">
      <h1 class="title">Delete Message</h1>
  </div>

  <form class="form-container" *ngIf="!submitted" (ngSubmit)="f.form.valid && onprocessForm(f)" #f="ngForm" name="support-form" novalidate>
      <label class="label">Email</label><br>
      <input type="email" name="email" id="email" class="input" placeholder="What's Your Email?" [(ngModel)]="deleteModel.del_email" required email #emailCtrl="ngModel"><br>

      <div style="color:red" *ngIf="emailCtrl.errors && (emailCtrl.dirty || emailCtrl.touched || f.submitted)" class="error-msg">
        <p *ngIf="emailCtrl.errors.required">
          Email is Required!
        </p>
        <p *ngIf="emailCtrl.errors.email">
          Email Provided is Invalid!
        </p>
      </div>

      <label class="label">Name</label><br>
      <input type="text" name="name" id="name" class="input" placeholder="What's Your Name?" required  maxlength="20" minlength="2" [(ngModel)]="deleteModel.del_name" #nameCtrl="ngModel"><br>

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

      <button type="submit" class="btnSubmit">
          Send
      </button>
  </form>
</div>`,
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  submitted = false;

  deleteModel = new deleteDetails();

  constructor(private _deleteService: DeleteService, private router: Router) { }

  ngOnInit(): void {

  }

  onprocessForm(f: NgForm) {
    const allInfo = `My email is ${this.deleteModel.del_email}. My message to Support Team is "${this.deleteModel.del_name}".`;
    alert(allInfo);
    this.submitted = true;
    this._deleteService.delete(this.deleteModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error) 
      )
      f.resetForm();
      this.router.navigate(['Home']);
  }

}
