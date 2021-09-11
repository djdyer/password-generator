var capLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specCharacters = [
  "!",
  "#",
  "$",
  "%",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var randomPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = randomPassword;
}

function generatePassword() {
  var requireUppercase = confirm(
    "Do you want your password to contain capital letters?"
  );
  var requireLowercase = confirm(
    "Do you want your password to contain lowercase letters?"
  );
  var requireNumbers = confirm("Do you want your password to contain numbers?");
  var requireSpecial = confirm(
    "Do you want your password to contain special characters?"
  );
  var randomPassword = "";
  var comboCharacters = [];

  if (requireUppercase) {
    comboCharacters = comboCharacters.concat(capLetters);
  }
  if (requireLowercase) {
    comboCharacters = comboCharacters.concat(lowLetters);
  }
  if (requireNumbers) {
    comboCharacters = comboCharacters.concat(numbers);
  }
  if (requireSpecial) {
    comboCharacters = comboCharacters.concat(specCharacters);
  }

  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Choose password length. Must choose between 8 - 128 characters."
    );
  }
  for (var i = 0; i < passwordLength; i++) {
    randomPassword +=
      comboCharacters[Math.floor(Math.random() * comboCharacters.length)];
  }
  return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
