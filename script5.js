// question 1 //
document.write('<h2>Question 1 </h2>');

let num1 = 10;
let num2 =9;
let sum = num1 + num2;

document.write("The sum of " + num1 +" and " + num2 + "is ; " + sum + " <br>");

// question 2 //
document.write('<h2>Question 2 </h2>');

let Num1 = 10;
let Num2 = 9;
let difference = num1 - num2;

document.write("The difference of " + num1 + " and " + num2 + " is:" + difference + "<br>");


// question 3  //
document.write('<h2>Question 3 </h2>');

// a //
let number;

// b //
document.write("Value after variable declaration is: " + number + "<br>");

// c //
number = 5;

// d //
document.write(" Value after variable initialization is:" + number  + "<br>" );

// e //
number++;

// f //
document.write(" Value after increment is:" + number + "<br>");


// g  //
number += 7;

//  h //
document.write("Value after addition is: " + number + "<br>");

// i //
number--;

// j //
document.write("Value after decrement is: " + number + "<br>");

// k //
document.write(" The Remainder after division by 3 is: " + number % 3 + "<br>");

// question 4 //
document.write('<h2>Question 4 </h2>');
 
// Store ticket price 
let ticketPrice = 600;

 // Calculate the cost of buying 5 tickets
 let numberOfTickets = 5;
 let totalCost = ticketPrice * numberOfTickets;

 document.write("Total  cost to  buy 5 tickets to a movie is: " + totalCost + " PKR." + "<br>");

//  question 5 //
document.write('<h2>Question 5 </h2>');

document.write('4 x 1 = ', 4*1, '<br>')
document.write('4 x 2 = ', 4*2, '<br>')
document.write('4 x 3 = ', 4*3, '<br>')
document.write('4 x 4 = ', 4*4, '<br>')
document.write('4 x 5 = ', 4*5, '<br>')
document.write('4 x 6 = ', 4*6, '<br>')
document.write('4 x 7 = ', 4*7, '<br>')
document.write('4 x 8 = ', 4*8, '<br>')
document.write('4 x 9 = ', 4*9, '<br>')
document.write('4 x 10 =', 4*10,'<br>')


// question 6 //
document.write('<h2>Question 6 </h2>');

// a. Store a Celsius temperature into a variable.
let celsius = 37; 

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
let fahrenheit = (celsius * 9/5) + 32;
 document.write(  celsius + "°C is" + fahrenheit + "°F" + "<br>");

// c. Now store a Fahrenheit temperature into a variable.
let fahrenheit2 = 98;

// d. Convert it to Celsius & output “NNoF is NNoC”.
let celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + "°F is" + celsius2 + "°C" + "<br>");

// question 7 //
document.write('<h2>Question 7 </h2>');
document.write('<h3>SHOPPING CART</h3>')

 // a. Price of item 1
let priceOfItem1 = 100;

// b. Price of item 2
let priceOfItem2 = 200;

// c. Ordered quantity of item 1
let quantityOfItem1 = 3;

 // d. Ordered quantity of item 2
let quantityOfItem2 = 2;

// e. Shipping charges
let shippingCharges = 50;

// Compute the total cost
let totalCost2 = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges;

document.write("<p>Price of item 1: " + priceOfItem1 + " PKR</p>");
document.write("<p>Price of item 2: " + priceOfItem2 + " PKR</p>");
document.write("<p>Ordered quantity of item 1: " + quantityOfItem1 + "</p>");
document.write("<p>Ordered quantity of item 2: " + quantityOfItem2 + "</p>");
document.write("<p>Shipping charges: " + shippingCharges + " PKR</p>");
document.write("<p>Total cost: " + totalCost2 + " PKR</p>");

// questions 8 //
document.write('<h2>Question 8 </h2>');
document.write('<h3>MARK SHEET</h3>')
 // Store total marks and marks obtained by a student in 2 variables
let totalMarks = 980;
let marksObtained = 915;

// Compute the percentage
let percentage = (marksObtained / totalMarks) * 100;

document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + " %</p> ");

// question 9 //
document.write('<h2>Question 9 </h2>');
document.write('<h3>Currency in PKR </h3>')
// we have 10 US dollars & 25 Saudi Riyals
let usd = 10;
let sar = 25;

// Exchange rates
let usdToPkr = 104.80;
let sarToPkr = 28;

// Convert the total currency to Pakistani Rupees in a single expression
let totalPkr = (usd * usdToPkr) + (sar * sarToPkr);

document.write("<p>Total Currency in PKR is: " + totalPkr + " </p>");

// question 10 //
document.write('<h2>Question 10 </h2>');

// Initialize a variable with some number
let number1 = 15; 

// Perform the arithmetic operations in a single expression
let result = ((number1 + 5) * 10) / 2;

document.write("<p>The result of the arithmetic sequence is: " + result + "</p>");

// question 11 //
document.write('<h2>Question 11 </h2>');
document.write('<h3>Age Calculator </h3>')

// a. Store the current year in a variable
let currentYear = 2024;

// b. Store their birth year in a variable
let birthYear = 1990;

// c. Calculate their 2 possible ages based on the stored values
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write("<p>They are either " + age1 + " or " + age2 + " years old.</p>");

// question 12 //
document.write('<h2>Question 12 </h2>');
document.write('<h3>The Geometrizer</h3>')

 // a. Store a radius into a variable
 let radius = 10; 

// b. Calculate the circumference based on the radius
 let pi = 3.142;
 let circumference = 2 * pi * radius;

// Calculate the area based on the radius
 let area = pi * radius * radius;

document.write("<p>The circumference is " + circumference + "</p>");
document.write("<p>The area is " + area + "</p>");

// question 13 //
document.write('<h2>Question 13 </h2>');
document.write('<h3>The Lifetime Supply Calculator</h3>')

 // a. Store your favorite snack into a variable
let favoriteSnack = "chocolate chip";

// b. Store your current age into a variable
let currentAge = 17;

// c. Store a maximum age into a variable
let maximumAge = 75;

// d. Store an estimated amount per day (as a number)
let amountPerDay = 3;

// e. Calculate how many would you eat total for the rest of your life
let yearsRemaining = maximumAge - currentAge;
let totalSnacks = yearsRemaining * 365 * amountPerDay;

document.write("<p>You will need " + totalSnacks + " " + favoriteSnack + "s to last you until the ripe old age of " + maximumAge + ".</p>");




























