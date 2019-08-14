import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  private readonly userName: string;
  private readonly userPassword: string;
  private readonly userEmail: string;
  private readonly userBirthDate: string;

  constructor() {}

  ngOnInit() {}

}
