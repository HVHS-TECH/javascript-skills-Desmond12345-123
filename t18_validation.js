const replace=document.getElementById("spaceForJavaScriptOutput")

const names="desmond";
const year=2026;
const age=67;
const bday=2026-67;
const future=67+10;
const money=3;
const balance=3/2;
const balanceagain=balance+3;

console.log("hi "+names);
console.log("As of "+year+" you are "+age+" years old");
console.log("you were born in "+bday);
console.log("In 10 years you will be "+future+" Years old");
console.log("You have "+money+"dollars");
console.log("You spend half of your money,now you have "+balance);
console.log("Then you get $3, now you have"+balanceagain);

function hola(){
    replace.innerHTML +="<p>Welocme to shop ig</p>"+names
}
function displayProduct(_name,_price){
    replace.innerHTML +=_name+_price+"<br>"
}

function start(){
    replace.innerHTML +="<p>Button is working i guess dude</p>"
}
let dataOnly = [];

function getFormInput(event){
    event.preventDefault();

    var NAME_FIELD = document.getElementById("nameFeild");
    let userName = NAME_FIELD.value;

    if(userName.length < 3){
        replace.innerHTML += "<p>Not acceptable pls try more than 3 letters</p>";
        return;
    }

    dataOnly.push(userName);

    replace.innerHTML += "<p>hola " + dataOnly + "</p>";
}

function getFormInput2(event){
    event.preventDefault();
    const NAME_FIELD = document.getElementById("usersAge");
    let userAge = NAME_FIELD.value;
    replace.innerHTML += "<p>Your age is " + userAge + "</p>";
}

function getFormInput3(event, price){
    event.preventDefault();
    const NAME_FIELD = document.getElementById("pocketMoney");
    let userMoney = Number(NAME_FIELD.value);

    replace.innerHTML += "<p>You have $" + userMoney + "</p>";

    if (userMoney < price){
        replace.innerHTML += "<p>Sorry, you are too broke </p>";
    } else {
        let change = userMoney - price;
        replace.innerHTML += "<p>You can buy it! Change: $" + change + "</p>";
    }
}

function getFormInput4(event){
    event.preventDefault()
    const NAME_FIELD = document.getElementById("chocolate");
    let choice=Number(NAME_FIELD.value);
    if (choice < 0 || choice > 3 || isNaN(choice)){
    replace.innerHTML += "nah u ain't smart<br>";
    return;
    }
    let classArray=["You loath chocolate","Chocolate is meh","Chocolate is pretty good","Chocolate is the best thing EVER!!!!"];
    replace.innerHTML += "you think:"+classArray[choice]+"<br>";
}
