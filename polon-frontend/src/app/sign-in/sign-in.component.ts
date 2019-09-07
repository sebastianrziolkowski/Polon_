import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../user/user.service';
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

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      userId: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      userPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
      ]),
    });
  };

  get userId() { return this.signInForm.controls.userId; };
  get userPassword() { return this.signInForm.controls.userPassword; };

  submit() {
    if (this.signInForm.invalid) {
      let message: string;

      if (this.userId.errors) {
        if (this.userId.errors.required) message = messages.noUserIdInput;
        else if (this.userId.errors.min) message = messages.negativeUserId;
      }

      else if (this.userPassword.errors) {
        if (this.userPassword.errors.required) message = messages.noPasswordInput;
        else if (this.userPassword.errors.minlength) message = messages.tooShortPasswordInput;
        else if (this.userPassword.errors.maxlength) message = messages.tooLongPasswordInput;
      }

      alert(message);
    }

    else this.userService.signIn(this.userId.value, this.userPassword.value);
  }
};
