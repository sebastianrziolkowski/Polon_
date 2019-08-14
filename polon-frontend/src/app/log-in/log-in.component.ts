import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit {
  userName: string;
  userPassword: string;

  validation() {
    class UserInput {
      input: string;
      message: string = "";
      error: boolean = false;

      constructor(userInput: any) {
        this.input = (userInput === undefined) ? "" : userInput;
      }
    }

    const Username = new UserInput(this.userName),
          Password = new UserInput(this.userPassword);

    // Username validation

    if (Username.input === "")
      Username.message = "Username is required";

    else if (Username.input.length < 5)
      Username.message = "Username is too short";

    else if (Username.input.length > 25)
      Username.message = "Username is too long";

    else if (!Username.input.match(/^[a-zA-Z]\w+$/g))
      Username.message = "First character of username must be a letter";

    if (Username.message !== "")
      Username.error = true;

    // Password validation

    if (Password.input === "")
      Password.message = "Password is required";

    else if (Password.input.length < 5)
      Password.message = "Password is too short";

    else if (Password.input.length > 25)
      Password.message = "Password is too long";

    if (Password.message !== "")
      Password.error = true;

    // PopUp creating

    if (Username.error || Password.error)
      this.errorPopUp(Username.error ? Username.message : Password.message);
  }

  errorPopUp(message: string) {
    alert(message);
  }

  constructor() {}

  ngOnInit() {}
}
