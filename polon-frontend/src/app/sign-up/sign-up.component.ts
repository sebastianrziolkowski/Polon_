import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import labels from '../../data/labels.json';
import messages from '../../data/messages.json';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  private readonly labels: Object = labels;
  private readonly messages: Object = messages;

  private signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
      ]),
      userPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
      ]),
      userPasswordConfirm: new FormControl(null, [
        Validators.required,
      ]),
      userEmail: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      userBirthDate: new FormControl(null, [
        Validators.required,
      ]),
    });
  };

  get userName() { return this.signUpForm.controls.userName; };
  get userPassword() { return this.signUpForm.controls.userPassword; };
  get userPasswordConfirm() { return this.signUpForm.controls.userPasswordConfirm; };
  get userEmail() { return this.signUpForm.controls.userEmail; };
  get userBirthDate() { return this.signUpForm.controls.userBirthDate; };
}
