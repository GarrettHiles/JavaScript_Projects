//This is a Global variable functionm
var X =  10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);

}
Add_numbers_1();
Add_numbers_2();

//This is a local variable function. 
function Add1() {
    var G = 10;
    document.write(20 + G + "<br>");
}
function Add2() {
    var G = 10;
    document.write(G + 100);
}
Add1();
Add2();

//Console log debug method/ debugged

function Plus1() {
    var H = 10;
    console.log(15 + H);
}
function Plus2() {
    var H = 10;   //added variable back
    console.log(H + 100);
}
Plus1()
Plus2()
//Displays How are you today at all hours before 8 with a if statement
function get_Date() {
    if (new Date().getHours() < 20) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
// Custom If statement assignment
let price = 50;
if(price >= 30){
    console.log("You can afford this item.")
}

//Else statement

function Age_function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;
}

//Else If statement

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}