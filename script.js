// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// The goal is to return something

function generatePassword(){
  var randomPassword = "";
  var includeInPassword = "";
  var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // var specialChar = ["!",'"', "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\', "]", "^", "_", '`', '{', '|', '}', '~'];
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";   // I had to add a backslahs in front of the double quote character
  var numberChar = '0123456789';
  
  // Prompt user for password length
  var length = getLength();
  console.log(length);
  // 4 confirms

  // Special Characters
  var isSpecial = getSpecialChar();
  console.log(isSpecial);
  if(isSpecial){
    includeInPassword = includeInPassword.concat(specialChar);
  }
  console.log(includeInPassword.length);

  // Lowercase
  var isLower = getLowercase();
  if(isLower) {
    includeInPassword = includeInPassword.concat(lowercaseChar);
  }
  console.log(includeInPassword.length);

  // Uppercase
  var isUpper = getUppercase();
  if(isUpper) {
    includeInPassword = includeInPassword.concat(uppercaseChar);
  }
  console.log(includeInPassword.length);

  // Number
  var isNumero = getNumbers();
  if(isNumero){
    includeInPassword = includeInPassword.concat(numberChar);
  }
  console.log(includeInPassword.length);
  console.log(includeInPassword);
  console.log("Array lenght is " + Array(length));
  console.log(Array(length).fill(includeInPassword));

  // generate password based on user soecifications, which come from confirmations

  // var randomPassword = Array(length).fill(includeInPassword).map(function(x) { return x[Math.floor(Math.random() * x.length)] });

  for (var i=0; i<length; i++) {
    var randNum = Math.floor(Math.random() * includeInPassword.length);
    randomPassword += includeInPassword.substring(randNum,randNum+1);
  }
  // for(var i=0; i<10 ; i++) { --> length user typed in

  // }

  console.log(randomPassword);
  return randomPassword;
  
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
