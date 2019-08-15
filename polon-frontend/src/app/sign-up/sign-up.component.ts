import { Component, OnInit } from '@angular/core';
import labels from '../../data/labels.json';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  private readonly userName: string;
  private readonly userPassword: string;
  private readonly userPasswordConfirm: string;
  private readonly userEmail: string;
  private readonly userBirthDate: string;

  private readonly subTitle: string = labels.title.signUp;
  private readonly usernamePlaceholder: string = labels.userInputPlaceholder.username;
  private readonly passwordPlaceholder: string = labels.userInputPlaceholder.password;
  private readonly passwordConfirmPlaceholder: string = labels.userInputPlaceholder.confirmPassword;
  private readonly emailPlaceholder: string = labels.userInputPlaceholder.email;
  private readonly birthPlaceholder: string = labels.userInputPlaceholder.birth;
  private readonly buttonLabel: string = labels.title.signUp;
  private readonly anchorLabel: string = labels.title.signIn;

  constructor() {}

  ngOnInit() {}

}
