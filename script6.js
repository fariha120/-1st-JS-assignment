
// question 1//

let a = 10;
document.write("The value of a is " + a + "<br>");

// Increment a using  postfix increment operator//
document.write("The value of ++a is " + ++ a + "<br>");
document.write("Now value of a is " + a + "<br>");

// Increment a using  postfix increment operator//
document.write("The value of a++ is " + a++ + "<br>");
document.write("Now value of a is " + a + "<br>");

// Decrement a using prefix decrement operator
document.write("The value of --a is " + --a + "<br>");
document.write("Now value of a is " + a + "<br>");

// Decrement a using postfix decrement operator
document.write("The value of a-- is " + a-- + "<br>");
document.write("Now value of a is " + a + "<br>");


// question 2  //

// Initialize variables
let a1 = 2, b = 1;

// Perform operations and capture intermediate results
let initialA = a1;
let initialB = b;

 let stage1 = --a1;             // Pre-decrement a: a = 1
 let stage2 = stage1 - --b;    // Pre-decrement b: b = 0, stage2 = 1 - 0 = 1
 let stage3 = stage2 + ++b;    // Pre-increment b: b = 1, stage3 = 1 + 1 = 2
 let result = stage3 + b--;    // Post-decrement b: stage4 = 2 + 1 = 3, b = 0 after the operation

document.write("<p>Initial values: a = " + initialA + ", b = " + initialB + "</p>");
document.write("<p>After --a: a = " + stage1 + "</p>");
document.write("<p>After --a - --b: result = " + stage2 + "</p>");
document.write("<p>After --a - --b + ++b: result = " + stage3 + "</p>");
document.write("<p>After --a - --b + ++b + b--: result = " + result + "</p>");
document.write("<p>Final values: a = " + a1 + ", b = " + b + "</p>");

// question 3 //
let name = prompt("please enter your name:");
alert("Hello, " + name + "!");


// question 5 //

 // Prompt the user to enter a number
 let userInput = prompt("Enter a number:", "5");
 let number = userInput ? parseInt(userInput) : 5;

 // Initialize an empty string to build the multiplication table
 let tableContent = "<h2>Multiplication Table of " + number + "</h2>";

 // Generate the multiplication table
 for (var i = 1; i <= 10; i++) {
     tableContent += number + " x " + i + " = " + (number * i) + "<br>";
 }

 document.write(tableContent);


// question 6 //
  // Prompt the user to enter the names of three subjects
  let subject1 = prompt("Math:");
  let subject2 = prompt("English:");
  let subject3 = prompt("Urdu:");

  // Total marks for each subject
  let totalMarksPerSubject = 100;

  // Prompt the user to enter the obtained marks for each subject
  let obtainedMarks1 = parseInt(prompt("100 " + subject1 + " :"));
  let obtainedMarks2 = parseInt(prompt("100 " + subject2 + ":"));
  let obtainedMarks3 = parseInt(prompt("100 " + subject3 + ":"));

  // Calculate the total obtained marks and percentage
  let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
  let totalMarks = totalMarksPerSubject * 70;
  let percentage = (totalObtainedMarks  / totalMarks) * 100;

  document.write("<table border='1'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td></tr>");
  document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtainedMarks + "</th></tr>");
  document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
  document.write("</table>");



