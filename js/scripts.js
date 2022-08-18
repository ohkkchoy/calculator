//Business Logic:
function add(number1, number2) {
  return number1 + number2;
 
}

function multiply(number1, number2) {
  return number1 * number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function division(number1, number2) {
  return number1 / number2;
}


//User Interface Logic:
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(number1 + " + " + number2 + " = " + add(number1, number2));
window.alert(number1 + " - " + number2 + " = " + subtract(number1, number2));
window.alert(number1 + " x " + number2 + " = " + multiply(number1, number2));
window.alert(number1 + " / " + number2 + " = " + division(number1, number2));