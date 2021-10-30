// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordCharacterOptions 
var userPasswordLength
//How long would you like your password to be? (min 8 - max 128)
function passwordLength() {
  passwordCharacterOptions = ""
  userPasswordLength = prompt('Password Length? There if an 8 character minimum and a 128 character maximum');
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
    console.log("The user wants a password that is " + userPasswordLength + " character(s).");
    upperCase();
    
  }
}

//Would you like uppercase?
function upperCase() {
  var userUpperCase = window.confirm('Would you like upper case? Click OK for yes and CANCEL for no.');
  if (userUpperCase) {
    console.log("The user wants a password that has upper case.")
    passwordCharacterOptions = (passwordCharacterOptions + "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    console.log("Possible Character Options So Far: " + passwordCharacterOptions);
    lowerCase();
    

  } else {
    console.log("The user wants a password that does not have upper case.")
    lowerCase();
  }

}
//Would you like lowercase?
function lowerCase() {
  var userLowerCase = window.confirm('Would you like lower case? Click OK for yes and CANCEL for no.');
  if (userLowerCase) {
    console.log("The user wants a password that has lower case.")
    passwordCharacterOptions = (passwordCharacterOptions + "abcdefghijklmnopqrstuvwxyz");
    console.log("Possible Character Options So Far: " + passwordCharacterOptions);
    numberTrue();
  } else {
    console.log("The user wants a password that does not have lower case.")
    numberTrue();
  }

}
//Would you like to include numbers?
function numberTrue() {
  var userNumberTrue = window.confirm('Would you like to include numbers? Click OK for yes and CANCEL for no.');
  if (userNumberTrue) {
    console.log("The user wants a password that includes numbers.")
    passwordCharacterOptions = (passwordCharacterOptions + "0123456789");
    console.log("Possible Character Options So Far: " + passwordCharacterOptions);
    specialCharacters();
  } else {
    console.log("The user wants a password that does not include numbers.")
    specialCharacters();
  }

}
//Would you like to include special Characters?
function specialCharacters() {
  var userSpecialCharacters = window.confirm('Would you like to use special characters? Click OK for yes and CANCEL for no.');
  if (userSpecialCharacters) {
    console.log("The user wants a password that includes special characters.")
    passwordCharacterOptions = (passwordCharacterOptions + "!#$%&'()*+,-./:;<=>?@]^_`[{|}~");
    console.log("Possible Character Options So Far: " + passwordCharacterOptions);
    writePassword();

  } else {
    console.log("The user wants a password that does not include special characters.")
    alert('You must have something in your password!');
    upperCase();
  }

}
// Write password to the #password input
function writePassword() {

  //convert string to numbers
  //i think its called an array
  //random array selection
  //do that until you reach password length

  var genPassword = '';
  var characters = passwordCharacterOptions.split('');

  for (var i = 0; i < userPasswordLength; i++) {
    genPassword += characters[(Math.floor(Math.random() * characters.length))];

  }


  var passwordText = document.querySelector("#password");
console.log('Password: ' + genPassword)
  passwordText.value = genPassword;



}


// Add event listener to generate button
generateBtn.addEventListener("click", passwordLength);




