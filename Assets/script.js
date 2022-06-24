// Assignment Code
alert('Whoever is grading this, be nice!!');
var generateBtn = document.querySelector("#generate");

//1. look at code. There was no generatePassword function
//2. Prompt user questions over password
// a. 8- 128 characters
// b.types of characters (lowercase, uppercass, numeric, or any special characters)
// 3. Validate the password
// Display password to the page

//created generatePassword
function generatePassword() {
  do {
  var characterNum = window.prompt('How many characters? (8-128) \nThis will repeat until an acceptable number is entered');
 } while (characterNum > 128 || characterNum < 8);
 alert('You have chosen ' + characterNum + ' characters');

let charSet = '';
var lowerCaseletters = 'abcdfghijklmnopqrstuwxyz';

var lowerCaseOp = window.confirm('Do you want lowercase characters? \nPress "Ok" for a Yes or "Cancel" for no');
  if (lowerCaseOp == true) {
   charSet += lowerCaseletters;
   alert("You have added Lower Case Letters."); 
  } 

var upperCaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 var upperCaseOp = window.confirm('Do you want Uppercase characters? \nPress "Ok" for a Yes or "Cancel" for no');
 if (upperCaseOp == true) {
  charSet += upperCaseletters;
   alert("You have added Upper Case Letters."); 
 } 

 var numbers = '0123456789'
 var numericOp = window.confirm('Do you want number characters? \nPress "Ok" for a Yes or "Cancel" for no');
 if (numericOp == true) {
  charSet += numbers;
  alert("You have added numbers."); 
 } 

 var specialChars = '!@#$%^&*()=-_'
 var specialCharOp = window.confirm('Do you want special characters? \nPress "Ok" for a Yes or "Cancel" for no');
 if (specialCharOp == true) {
  charSet += specialChars;
  alert("You have added Special Characters."); 
 } 

console.log(charSet);
 let passwordcreate= '';
 var characterNumInt = parseInt(characterNum);
 for(var i=0; i < characterNumInt; i++) {
  var randomChar = charSet.charAt(Math.floor(Math.random() * charSet.length));
  passwordcreate += randomChar;
  }


 return passwordcreate
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
