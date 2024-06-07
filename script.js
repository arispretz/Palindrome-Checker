function palindrome(str) {
  let pattern = /[^A-Za-z0-9]/g;
  let chars = str.replace(pattern, '');
  let sentence = chars.toLowerCase();
  let reversedSentence = sentence.split('').reverse().join('');
  if (sentence === reversedSentence) {
    return "It's a palindrome!";
  } else {
    return "It's not a palindrome!";
  }
}

let button = document.querySelector("#check");
let textarea = document.querySelector("textarea");
let resultDiv = document.querySelector("#result");
let clearButton = document.querySelector("#clear");

button.addEventListener('click', function(e) {
  e.preventDefault(); 
  let text = textarea.value.trim();
  if (text !== "") {
    let result = palindrome(text);
    resultDiv.textContent = result;
  } else {
    resultDiv.textContent = "";
  }
});

clearButton.addEventListener('click', function(e) {
  e.preventDefault(); 
  textarea.value = ""; 
  resultDiv.textContent = ""; 
});
