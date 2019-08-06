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

  validation() {
    class UserInput {
      readonly input: any;
      message: string = "";
      error: boolean = false;

      constructor(userInput: any) {
        this.input = (userInput === undefined) ? "" : userInput;
      }
    }

    class UserInputDate extends UserInput {
      constructor(userInput: any) {
        super(new Date(userInput));
      }
    }

    const Username: UserInput = new UserInput(this.userName),
          Password: UserInput = new UserInput(this.userPassword),
          Email: UserInput = new UserInput(this.userEmail),
          Birth: UserInputDate = new UserInputDate(this.userBirthDate);

    // Username validation

    if (Username.input === "")
      Username.message = "Username is required";

    else if (Username.input.length < 5)
      Username.message = "Username is too short";

    else if (Username.input.length > 25)
      Username.message = "Username is too long";

    else if (!Username.input.match(/^[a-zA-Z]\w+$/g))
      Username.message = "First character of username must be a letter";

    // Password validation

    if (Password.input === "")
      Password.message = "Password is required";

    else if (Password.input.length < 5)
      Password.message = "Password is too short";

    else if (Password.input.length > 25)
      Password.message = "Password is too long";

    // Email validation

    if (Email.input === "")
      Email.message = "Email is required";

    else if (!Email.input.match(/^\S+@\S+\.\S+$/g))
      Email.message = "This email seems to be not valid";

    // Birth date validation

    const today: any = new Date();

    if (isNaN(Birth.input.getTime()))
      Birth.message = "Birth date is required";

    else if (Birth.input > today)
      Birth.message = "This birth date seems to be not valid";

    else if (((parseInt(today.getTime()) - parseInt(Birth.input.getTime())) / 410227200000) <= 1)
      Birth.message = "User must be at least 13 year old";

    // PopUp creating

    const inputs: UserInput[] = [Username, Password, Email, Birth];

    for (const input of inputs) {
      if (input.message !== "") {
        alert(input.message);
        break;
      }
    }
  }

  constructor() {}

  ngOnInit() {}

}
