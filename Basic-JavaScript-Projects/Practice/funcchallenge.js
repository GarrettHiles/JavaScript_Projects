function challenge() {
   var sentence = "This challenge has been completed. Congrats!"
   document.getElementById("dog").innerHTML = sentence; 
   document.getElementById("dog").style.color = "blue";
 
}
//stops the page from working because you cannot use null as a variable
var null = "dave" 
document.write(null)

function Person(First, Last, Eye_Color, Birthdate) {
   this.Person_First = First;
   this.Person_Last = Last;
   this.Person_Eye_Color = Eye_Color;
   this.Person_Birthdate = Birthdate;
}
var Payton = new Person ("Payton", "Schmitt", "Brown", "11/25/02")
var Garrett = new Person ("Garrett", "Hiles", "Blue", "08/16/02")
var Jake = new Person ("Jake", "Creps", "Brown", "11/26/02")
function rando() {
   document.getElementById("Constructor").innerHTML =
   "Today " + Payton.Person_First + " wanted to know if his last name " + Payton.Person_Last +
   " is really his last name.";
}
