// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// The goal is to return something

function generatePassword(){
  var passwordChar = '';
  var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // var specialChar = ["!",'"', "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\', "]", "^", "_", '`', '{', '|', '}', '~'];
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";   // I had to add a backslahs in front of the double quote character
  var numberChar = '123456789';
  
  // Prompt user for password length
  var length = getLength();
  
  // 4 confirms

  // Special Characters
  var special = getSpecialChar();
  // Numbers - 10 characters long

  // Lowercase
  var lower = getLowercase();

  // Uppercase
  var upper = getUppercase();

  // Number
  var numeros = getNumbers();

  // generate password based on user soecifications, which come from confirmations
  var randomPassword = Array(length).fill()
  // " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
  // for(var i=0; i<10 ; i++) { --> length user typed in

  // }
  return passwordChar;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function getLength(){
  var userInputLength = prompt("Choose a password between 8 and 128 characters (type the number)");
  // Check to see if user entered a length
  if (userInputLength >= 8 || userInputLength <= 128) {
    return userInputLength;
  } else {
    prompt("Please type a number between 8 and 128!")
  }
};

function getSpecialChar(){
  var userInputSpecialChar = confirm("Do you want to use special characters?");
  return userInputSpecialChar;
};

function getLowercase(){
  var userInputLowercase = confirm("Do you want lowercase characters?");
  return userInputLowercase;
};

function getUppercase() {
  var userInputUppercase = confirm("Do you want uppercase characters?");
  return userInputUppercase;
};

function getNumbers() {
  var userInputNumber = confirm("Do you want to include numbers from 0 to 9?");
  return userInputNumber;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
