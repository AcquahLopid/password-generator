var finalPassword = [];

var chosenCriterias;

var getPassword = document.querySelector("#generate");

// Special Characters
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lowercase characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// adding a click event for the generate password button
getPassword.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("#password").placeholder = ps;
});


function generatePassword(){

    var userInput = prompt("How many characters would you like your password to be? it has to be in between 8 and 120."); // Prompt displayed on website for user to see and read 
  if (userInput < 8 || userInput > 120){        // Prompt conditions defined and asking for user to input values between 8-120 and if not chosen between those values an alert pops up and tells them it has to be
      alert("The value you choose needs to be between 8 and 120!!!!");
    } else{    // if the if statement isnt true then it moves to the else that output confirm methods to the website
      var userConfirmSC = confirm("Will your password have special characters?");
      var userConfirmNum = confirm("Will your password have numbers?");
      var userConfirmLC = confirm("Will your password have lowercase letters?");
      var userConfirmUC = confirm("Will your password have uppercase letters?");
    }

    // if no criterias are picked
    if (!userConfirmSC && !userConfirmNum && !userConfirmLC && !userConfirmUC){
        alert("You have to choose atleast one criteria!!");

      // if all criterias are picked
      }else if (userConfirmSC && userConfirmNum && userConfirmLC && userConfirmUC){
        chosenCriterias = specialCharacters.concat(number, lowerCase, upperCase);
        // all picked criterias mixed with special character 
    }else if (userConfirmSC && userConfirmNum && userConfirmLC){
        chosenCriterias = specialCharacters.concat(number, lowerCase);
    }else if (userConfirmSC && userConfirmNum && userConfirmUC){
      chosenCriterias = specialCharacters.concat(number, upperCase);
    }else if (userConfirmSC && userConfirmUC && userConfirmLC){
        chosenCriterias = specialCharacters.concat(lowerCase, upperCase);
    }else if (userConfirmSC && userConfirmNum){
        chosenCriterias = specialCharacters.concat(number);
    }else if (userConfirmSC && userConfirmLC){
        chosenCriterias = specialCharacters.concat(lowerCase);
    }else if (userConfirmSC && userConfirmUC){
        chosenCriterias = specialCharacters.concat(upperCase);
    }else if (userConfirmSC){
        chosenCriterias = specialCharacters;
    }
      // all picked criterias mixed with numbers
    else if (userConfirmNum && userConfirmLC && userConfirmUC){
        chosenCriterias = number.concat(lowerCase, upperCase);
    }else if (userConfirmNum && userConfirmLC){
        chosenCriterias = number.concat(lowerCase);
    }else if (userConfirmNum){
        chosenCriterias = number;
    }
      // all picked criteria mixed with lower case
    else if (userConfirmLC && userConfirmUC){
        chosenCriterias = lowerCase.concat(upperCase);
    }else if (userConfirmLC){
        chosenCriterias = lowerCase;
    }
      // all picked criterias mixed with upper case
    else if (userConfirmUC){
        chosenCriterias = upperCase
    }

//       //for loop that randomizes a password for the user
//     for (var i = 0; i < userInput; i++){
//       var selectedCriteria = chosenCriterias[Math.floor]
//     }
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
