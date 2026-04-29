/****************************
This is a block comment.
Put your header comment here!
****************************/
const replace = document.getElementById("spaceForJavaScriptOutput")
replace.innerHTML = "This is the output of JavaScript code. You can replace this text with your own output by using JavaScript to change the innerHTML of this element."
console.log("Running t01_introduction.js")
console.log("Hello, World!")

// This is a single line comment

var name = "Desmond";
console.log(name)

var age = 15;
console.log(age)

var isStudent = true
console.log("My name is "+ name + " and I am " + age + " years old. Am I a student? " + isStudent)
console.log("You were born in " + (2026 - age))
console.log("In 20 years, you will be " + (age + 20))
var num1 = 100;
console.log("You have $" + num1)
console.log("Half your money you have $" + num1/2)
console.log("If you get $3 than you will have $" + (num1 + 3))

function welcome(name) {
    replace.innerHTML = "<p>Welcome to the shop</p>" + name
}

welcome(name);