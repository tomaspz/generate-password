// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

 
function generatePassword(){        // Create the function to generate the password

  var randomPassword = "";          // the generated random password starts as an empty string
  var includeInPassword = "";       // string that will contain all the required characters under user specifications
  var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';     // lower case characters string
  var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';     // upper case characters string
  
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";   // Special characters string. I had to add a backslahs in front of the double quote character
  var numberChar = '0123456789';    // numbers string
  
  // Password Length
  var length = getLength();     // Prompts user for password length and save it in the variable length
  console.log("The length of the password should be : " + length + " characters");      

  // Special Characters
  var isSpecial = getSpecialChar();   // Prompts user for special characters and save the boolean value in the variable isSpecial
  console.log("If true, the user wants to include special characters: " + isSpecial);
  if(isSpecial){
    includeInPassword = includeInPassword.concat(specialChar);      // if true, add the special characters to the string includeInPassword
  }
  console.log("Length of the string is now: " + includeInPassword.length);

  // Lowercase
  var isLower = getLowercase();     // Prompts user for lower case characters and save the boolean value in the variable isLower
  if(isLower) {
    includeInPassword = includeInPassword.concat(lowercaseChar);  // if true, add the lowercase characters to the string includeInPassword
  }
  console.log("Length of the string is now: " + includeInPassword.length);

  // Uppercase
  var isUpper = getUppercase();     // Prompts user for upper case characters and save the boolean value in the variable isUpper
  if(isUpper) {
    includeInPassword = includeInPassword.concat(uppercaseChar);    // if true, add the uppercase characters to the string includeInPassword
  }
  console.log("Length of the string is now: " + includeInPassword.length);

  // Number
  var isNumero = getNumbers();    // Prompts user for number characters and save the boolean value in the variable isNumero
  if(isNumero){
    includeInPassword = includeInPassword.concat(numberChar);     // if true, add the number characters to the string includeInPassword
  }
  console.log("Length of the string is now: " + includeInPassword.length);
  console.log("They final string to process: " + includeInPassword);


  // generate password based on user soecifications, which come from confirmations

  for (var i=0; i<length; i++) {                                                // loop through the password length desired by the user
    var randNum = Math.floor(Math.random() * includeInPassword.length);         // create a random number based on the characters in the string
    randomPassword += includeInPassword.substring(randNum,randNum+1);           // add characters to the string randomPassword
  }

  console.log("The random password generated under user specifications is: " + randomPassword);
  return randomPassword;          // return the random password generated in the for loop
  
}

function writePassword() {                            // function to write the password on the browser
  var password = generatePassword();                  // save the generated password in a variable
  var passwordText = document.querySelector("#password");   // create a variable that points to the text area in index.html

  passwordText.value = password;                        // assign the generated password to the content of the text area

};

function getLength(){             // Create a function to make the user to  enter the desired password length
  var userInputLength = prompt("Choose a password between 8 and 128 characters (type a number)");  // prompt user for a password length between 8 and 128 characters
  console.log("This is userInputLenght inside the getLength function : " + userInputLength);
  
  if (userInputLength <= 8 || userInputLength >= 128) {       // if user input is less than 8 or greater than 128
    alert("Please type a number between 8 and 128!");         // alert a message
    return getLength();                                       // ask for a password length again
  } else {
    return userInputLength;                                   // otherwise, return the user input
  }
};

function getSpecialChar(){          // Create a function to ask for special characters
  var userInputSpecialChar = confirm("Do you want to use special characters?");     // ask the user if they want special characters in the password
  return userInputSpecialChar;      // Returns a boolean value
};

function getLowercase(){          // Create a function to ask for lower case characters
  var userInputLowercase = confirm("Do you want lowercase characters?");      // ask the user if they want lower case characters in the password
  return userInputLowercase;      // Returns a boolean value
};

function getUppercase() {         // Create a function to ask for upper case characters
  var userInputUppercase = confirm("Do you want uppercase characters?");    // ask the user if they want upper case characters in the password
  return userInputUppercase;      // Returns a boolean value
};

function getNumbers() {         // Create a function to ask for number characters
  var userInputNumber = confirm("Do you want to include numbers from 0 to 9?");   // ask the user if they want number characters in the password
  return userInputNumber;       // Returns a boolean value
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
