//Displays an a alert with a random number between 1-50 with 1 decmial points allowed 
window.alert(Math.random().toFixed(2)* 50) ;
//This is a addition function
function addition_Function() {
    var addition = 4 + 4;
    document.getElementById("Math").innerHTML= "4 + 4 =" + addition;
}
//This function subtracts 
function subtraction_Function() {
    var subtraction = 673 - 244;
    document.getElementById("Sub").innerHTML = "673 - 244 = " + subtraction;
}
//this is a multiplication function
function multiplication() {
    var simple_Math = 56 * 78;
    document.getElementById("Multi").innerHTML = "56 x 78 = " + simple_Math;
}
//This function is capeable of Division
function division() {
    var simple_Math = 89 / 8;
    document.getElementById("Division").innerHTML = " 89 / 8 = " + simple_Math;
}
//This function does equations like in algebra
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Various").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;

}
//This gives the remainder of a number after it has been divided
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
//This turns what ever interger into a negititve
function negation_Operator() {
    var x = 10;
    document.getElementById("Negitive").innerHTML = -x;
}
//this function increases the number by 1
function increment() {
    var X = 5 ;
    X++;
    document.getElementById("increment").innerHTML = X;
}
//decreases the number by one
function decrement() {
    var x = 5.25 ;
    x--;
    document.getElementById("decrement").innerHTML = x;
 }
//This function takes a number to the power of another number
 function Power() {
    let pow = Math.pow(6,9);
    document.getElementById("power").innerHTML = pow;
 }


