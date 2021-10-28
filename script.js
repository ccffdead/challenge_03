// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//How long would you like your password to be? (min 8 - max 128)
function passwordLength() {
  var userPasswordLength = prompt('Password Length? There if an 8 character minimum and a 128 character maximum');
  if (userPasswordLength === "" || userPasswordLength === null) {
    alert('You must enter a number between 8 and 128!');
    return passwordLength();
  } else if (userPasswordLength > 128) {
    alert('You must choose a character amount that is less than 128!');
    return passwordLength();
  } else if (userPasswordLength < 8) {
    alert('You must choose a character amount that is 8 or more!');
    return passwordLength();
  } else {
    console.log("The user wants a password that is " + userPasswordLength + " character(s).") 
    upperCase();
  }
}

//Would you like uppercase?
function upperCase() {
  var userUpperCase = window.confirm('Would you like upper case? Click OK for yes and CANCEL for no.');
  console.log(userUpperCase);
}
//Would you like lowercase?
function lowercase() {
  var userLowerCase = window.confirm('Would you like lower case? Click OK for yes and CANCEL for no.');
  console.log(userLowerCase);
}
//Would you like to include numbers?
function numberTrue() {
  var userNumberTrue = window.confirm('Would you like to include numbers? Click OK for yes and CANCEL for no.');
  console.log(userNumberTrue);
}
//Would you like to include special Characters?
function specialCharacters() {
  var userSpecialCharacters = window.confirm('Would you like to use special characters? Click OK for yes and CANCEL for no.');
  console.log(userSpecialCharacters);
}

passwordLength();



