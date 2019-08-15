import { Component, OnInit } from '@angular/core';
import labels from '../../data/labels.json';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  private readonly userName: string;
  private readonly userPassword: string;

  private readonly subTitle: string = labels.title.signIn;
  private readonly usernamePlaceholder: string = labels.userInputPlaceholder.username;
  private readonly passwordPlaceholder: string = labels.userInputPlaceholder.password;
  private readonly buttonLabel: string = labels.title.signIn;
  private readonly anchorLabel: string = labels.title.signUp;

  constructor() {}

  ngOnInit() {}
}
