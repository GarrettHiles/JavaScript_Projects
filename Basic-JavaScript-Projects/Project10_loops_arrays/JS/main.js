
// 
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
//list of instruments 
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// function with different cat photos and it displays catpicture 2 with some string behind it.
function cat_pics() {
    var Cat_Picture =[];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "in this picture, the cat is " + Cat_Picture[2] + ".";

}
//Introduces a guitar object and changes the color and adds a price.
function constant_function() {
    const Musical_Instument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instument.color = "blue";
    Musical_Instument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instument.type + " was " + Musical_Instument.price;
}
//This was just to use a let.
var G = 72;
document.write(G);
{
    let G = 2;
    document.write("<br>" + G)
}
document.write("<br>" + G);
//using a return statement
function add(a, b) {
    return a + b;
}
const result = add(2, 3);
console.log(result);

//This object is a game with use of const instead of a let.
const game = {
    type: "RPG",
    platform: "PS5",
    year: "2024",
    developer: "Rockstar",
    description : function() {
        return "This game is a " + this.type + " that comes out in " + this.year + " from " + this.developer;

    }
}
document.getElementById("Game_object").innerHTML = game.description();
//a break statement that stops after 2.
let text = "";
for (let g = 0; g < 10; g++) {
    if (g===2) {break;}
    text += "The number is " + g + "<br>";
}
document.getElementById("break").innerHTML = text;
// continue statement that counts up to 10 and skips 3.
let write = " ";
for (let i = 0; i < 10; i++) {
    if (i===3) { continue; }
    text += i + "<br>";
}
document.getElementById("continue").innerHTML = text; 