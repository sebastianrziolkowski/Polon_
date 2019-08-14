export default (actionType: string, userName: string, userPassword: string) => {
  class UserInput {
    readonly input: any;
    message: string = '';
    error: boolean = false;

    constructor(userInput: any) {
      this.input = (userInput === undefined) ? '' : userInput;
    }
  }

  const Username: UserInput = new UserInput(userName),
        Password: UserInput = new UserInput(userPassword);

  const inputs: UserInput[] = [Username, Password];

  // Username validation

  if (Username.input === '')
    Username.message = 'Username is required';

  else if (Username.input.length < 5)
    Username.message = 'Username is too short';

  else if (Username.input.length > 25)
    Username.message = 'Username is too long';

  else if (!Username.input.match(/^[a-zA-Z]\w+$/g))
    Username.message = 'First character of username must be a letter';

  // Password validation

  if (Password.input === '')
    Password.message = 'Password is required';

  else if (Password.input.length < 5)
    Password.message = 'Password is too short';

  else if (Password.input.length > 25)
    Password.message = 'Password is too long';

  if (actionType === 'signUp') {
    class UserInputDate extends UserInput {
      constructor(userInput: any) {
        super(new Date(userInput));
      }
    }

    const Email: UserInput = new UserInput(this.userEmail),
          Birth: UserInputDate = new UserInputDate(this.userBirthDate);

    // Email validation

    if (Email.input === '')
      Email.message = 'Email is required';

    else if (!Email.input.match(/^\S+@\S+\.\S+$/g))
      Email.message = 'This email seems to be not valid';

    // Birth date validation

    const today: any = new Date();

    if (isNaN(Birth.input.getTime()))
      Birth.message = 'Birth date is required';

    else if (Birth.input > today)
      Birth.message = 'This birth date seems to be not valid';

    else if (((parseInt(today.getTime()) - parseInt(Birth.input.getTime())) / 410227200000) <= 1)
      Birth.message = 'User must be at least 13 year old';

    inputs.push(Email, Birth);
  }

  // PopUp creating

  for (const input of inputs) {
    if (input.message !== '') {
      alert(input.message);
      break;
    }
  }
};
