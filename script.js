// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// The goal is to return something

function generatePassword(){
  // Prompt user for password length
  var userInputLength = prompt("Choose a password with 8, 9 or 10 characters (type the number)")
  // Check to see if user entered a length
  if (userInputLength === 8 || userInputLength === 9 || userInputLength === 10) {

  } else {

  };
  // 4 confirms

  // Special Characters
  var userInputSpecialChar = prompt("Do you want to use special characters?");
  // Numbers - 10 characters long

  // Lowercase
  var userInputLowercase = prompt("Do you want lowercase characters?");
  // Uppercase
  var userInputUppercase = prompt("Do you want uppercase characters?");
  // generate password based on user soecifications, which come from confirmations
  // " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
  // for(var i=0; i<10 ; i++) { --> length user typed in

  // }
  return "something";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
