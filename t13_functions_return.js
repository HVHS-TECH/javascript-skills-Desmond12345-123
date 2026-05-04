/****************************
This is a block comment.
Put your header comment here!
****************************/
const output = document.getElementById("spaceForJavaScriptOutput")
output.innerHTML = "This is the output of JavaScript code. You can replace this text with your own output by using JavaScript to change the innerHTML of this element."
console.log("Running t01_introduction.js")
console.log("Hello, World!")

// This is a single line comment

let name = "Desmond";
console.log(name)

let age = 15;
console.log(age)

let isStudent = true
console.log("My name is "+ name + " and I am " + age + " years old. Am I a student? " + isStudent)
console.log("You were born in " + (2026 - age))
console.log("In 20 years, you will be " + (age + 20))
let num1 = 100;
console.log("You have $" + num1)
console.log("Half your money you have $" + num1/2)
console.log("If you get $3 than you will have $" + (num1 + 3))

function welcome(name) {
    output.innerHTML = "<p>Welcome to the shop</p>" + name
}

welcome(name);





function start() {
    output.innerHTML += "<p>Button was clicked!</p>"
}


function getFormInput() {
    const nameField = document.getElementById("nameField");
    userName = nameField.value;
    output.innerHTML += "<p>Hello, " + userName + "!</p>"
}       


function getAge () {
    const ageField = document.getElementById("ageField");
    userAge = ageField.value;
    output.innerHTML += "<p>You are t" + userAge + " years old.</p>"
}


function getUserPocketMoney () {
    const pocketMoneyField = document.getElementById("pocketMoneyField");
    let userPocketMoney = pocketMoneyField.value;
    output.innerHTML += "<p>You have $" + userPocketMoney + " in your pocket.</p>"
    if (userPocketMoney >= 4) {
        output.innerHTML += "<p>You CAN afford a chocolate bar!</p>"
    } else {
        output.innerHTML += "<p>You CANNOT afford a chocolate bar!</p>"
    }
}



let chocolateBarPrice = 4;
function caclulateChange(userPocketMoney, chocolateBarPrice){
    let change = (userPocketMoney - chocolateBarPrice);
    output.innerHTML += "<p>hello</p>";
    output.innerHTML += "<p>If you buy the chocolate bar, your change is $" + change + "</p>";
}

getFormInput();
getUserPocketMoney();
getAge();