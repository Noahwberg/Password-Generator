// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var numberOfCharacters = prompt('How many characters would you favor in your Password?');
  if (numberOfCharacters < 8) {
    alert('Your password must be at least 8 characters');
    return;
  } else if (numberOfCharacters > 128) {
    alert('Your password must be 128 characters or less');
    return;
  } else {
    //Adding rules into my array
    var rulesQuestions = [];
    rulesQuestions.push ({
      CharactersAllowed: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      , text: 'Is it in your favor to have Upper case charaters in your password?'
    });
    rulesQuestions.push ({
      CharactersAllowed: 'abcdefghijklmnopqrstuvwxyz'
      , text: 'Is it in your favor to have Lower case charaters in your password?'
    });
    rulesQuestions.push ({
      CharactersAllowed: '0123456789'
      , text: 'Is it in your favor to have Numbers in your password?'
    });
    rulesQuestions.push ({
      CharactersAllowed: '~`!@#$%^&*()_+-=[]{}|;:,<.>/?'
      , text: 'Is it in your favor to have Special characters in your password?'
    });

    //Need to go over how to generate each rule in the prompt again
    var charactersAllowed = '';

    for (var i = 0; i < rulesQuestions.length; i++) {
      if (confirm(rulesQuestions[i].text) == true) {
        charactersAllowed += rulesQuestions[i].CharactersAllowed;
      } 
    }
    if (!charactersAllowed) {
      alert('No character types where chosen. Please start again.')
    }
    //Also need to go over the password generator code one more time
    var result = getRandomString(numberOfCharacters, charactersAllowed)
    return result;
  }
}
function getRandomString(numberOfCharacters, charactersAllowed) {
  var result = '';
  for (var i = 0; i < numberOfCharacters; i++) {
    result += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length));
  }
  return result;
}

