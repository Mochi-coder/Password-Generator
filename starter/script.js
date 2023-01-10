// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  if (isNaN(length) === true) {
    alert('Please enter a number for your password length');
    return;
  }

  if (length < 10) {
    alert('The password length must be more than 10 characters');
    return;
  }

  if (length > 64) {
    alert('The password length must less than 64 characters');
    return;
  }

  var includesSpecialCharacters = confirm(
    'Click OK for the password to include special characters'
  );

  var includesNumericCharacters = confirm(
    'Click OK for the password to include numeric characters'
  );

  var includesLowerCasedCharacters = confirm(
    'Click OK for the password to include lowercase characters'
  );

  var includesUpperCasedCharacters = confirm(
    'Click OK for the password to include uppercase characters'
  );

  if (
    includesSpecialCharacters === false &&
    includesNumericCharacters === false &&
    includesLowerCasedCharacters === false &&
    includesUpperCasedCharacters === false
  ) {
    alert('Your password must include at least one character type');
    return;
  }

  var passwordOptions = {
    length: length,
    includesSpecialCharacters: includesSpecialCharacters,
    includesNumericCharacters: includesNumericCharacters,
    includesLowerCasedCharacters: includesLowerCasedCharacters,
    includesUpperCasedCharacters: includesUpperCasedCharacters
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];


  if (options.includesSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.includesNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.includesLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.includesUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);