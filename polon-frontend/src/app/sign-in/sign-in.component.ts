import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import labels from '../../data/labels.json';
import messages from '../../data/messages.json';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  private readonly labels: Object = labels;
  private readonly messages: Object = messages;

  private signInForm: FormGroup;

  ngOnInit() {
    this.signInForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        //Validators.pattern('^[a-zA-Z]\w+$'),
        Validators.minLength(5),
        Validators.maxLength(25),
      ]),
      userPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
      ]),
    });
  };

  get userName() { return this.signInForm.controls.userName; };
  get userPassword() { return this.signInForm.controls.userPassword; };

  submit() {
    if (this.signInForm.invalid) {
      let message: string;

      if (this.userName.errors) {
        if (this.userName.errors.required) message = messages.noUserNameInput;
        else if (!Boolean(this.userName.value.charAt(0).match(/^[a-zA-z]$/))) message = messages.wrongUserNamePatternInput;
        else if (this.userName.errors.minlength) message = messages.tooShortUserNameInput;
        else if (this.userName.errors.maxlength) message = messages.tooLongUserNameInput;
      }

      else if (this.userPassword.errors) {
        if (this.userPassword.errors.required) message = messages.noPasswordInput;
        else if (this.userPassword.errors.minlength) message = messages.tooShortPasswordInput;
        else if (this.userPassword.errors.maxlength) message = messages.tooLongPasswordInput;
      }

      alert(message);
    }
  }
};
