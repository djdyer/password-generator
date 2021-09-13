// 4 arrays for each of the different character types
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

// Targets button tag by ID
var generateBtn = document.querySelector("#generate");

// Click event launches writePassword function, which launches generatePassword function
generateBtn.addEventListener("click", writePassword);

// Writes password to the #password input, by replacing the placeholder attribute
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // Sets password and combined character array to empty
  var randomPassword = "";
  var comboCharacters = [];

  // 4 confirms for user to OK or Cancel each character type, assigning boolean value to requireVars
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

  // Issues alert if user declines all character types, returns to repeat function
  if (
    requireUppercase === false &&
    requireLowercase === false &&
    requireNumbers === false &&
    requireSpecial === false
  ) {
    alert("You must choose at least one character type!");
    return generatePassword();
  }

  // Concatinates character type arrays into comboCharacters array per user confirmations
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

  // passwordLength set to 0 issues prompt, loops if conditions are not met.
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Choose password length. Must choose between 8 - 128 characters."
    );
  }

  // Creates final password by pulling requested character length from combined array
  for (var i = 0; i < passwordLength; i++) {
    randomPassword +=
      comboCharacters[Math.floor(Math.random() * comboCharacters.length)];
  }
  return randomPassword;
}
