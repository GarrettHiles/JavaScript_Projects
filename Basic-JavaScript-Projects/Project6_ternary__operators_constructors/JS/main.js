// this function wheter a person can ride a ride based on their height
function Ride_Function() {
    var Height, Can_ride
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//Added Game objects
function Game(Type, Year, Name, Platform) {
    this.Game_Type = Type;
    this.Game_Year = Year;
    this.Game_Name = Name;
    this.Game_Platform = Platform;
}
var Garrett = new Game ("Action/Adventure", 2023, "Spider-Man 2", "Playstation 5");
var Alex = new Game ("Survival Horror", 2023, "Dead Space", "Playstation 5");
var Carson = new Game ("RPG", 2023, "Starfield", "PC");
function GameOn() {
    document.getElementById("New_and_This").innerHTML =
    "Garrett plays " + Garrett.Game_Name + " that came out in " + Garrett.Game_Year +
    " on the " + Garrett.Game_Platform;
}
//This function has a nested function that take 9 to 10
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}