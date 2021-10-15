console.log("Welcome to the Password Validator Tool!");

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Please enter a password you would like validated:",
  function (input) {
    userInput = input;

    if (userInput.length === 0) {
      console.log(
        "You must enter a password. Please restart the program and enter a password."
      );
    } else if (userInput.length >= 10) {
      console.log(
        " Your password is validated!. It meets the necessary amount of characters needed."
      );
    } else if (userInput.length > 0 && userInput.length < 10) {
      console.log(
        "Passwords must have a mininum of 10 characters to be validated."
      );
    }

    // This line closes the connection to the command line interface.
    reader.close();
  }
);
