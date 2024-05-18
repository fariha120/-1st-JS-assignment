let num1 = 10;
let num2 =9;
let sum = num1 + num2;

document.write("the sum of " + num1 +" and " + num2 + "is ; " + sum + " <br>");

window.onload = function() {

    var number1 = parseFloat(prompt("8:"));
    var number2 = parseFloat(prompt("2:"));

    // Perform arithmetic operations
    var addition = number1 + number2;
    var subtraction = number1 - number2;
    var multiplication = number1 * number2;
    var division = number1 / number2;
    var modulus = number1 % number2;


    document.getElementById("addition").innerHTML = "The sum of " + number1 + " and " + number2 + " is: " + addition;
    document.getElementById("subtraction").innerHTML = "The difference between " + number1 + " and " + number2 + " is: " + subtraction;
    document.getElementById("multiplication").innerHTML = "The product of " + number1 + " and " + number2 + " is: " + multiplication;
    document.getElementById("division").innerHTML = "The quotient of " + number1 + " divided by " + number2 + " is: " + division;
    document.getElementById("modulus").innerHTML = "The modulus of " + number1 + " and " + number2 + " is: " + modulus;
}
