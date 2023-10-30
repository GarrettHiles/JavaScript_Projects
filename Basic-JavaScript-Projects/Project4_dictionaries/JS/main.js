// Make a function with KVP and deleted a key value before it is display as undefined
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    //deletes key value Color
   delete Animal.Color;
    document.getElementById("Dictionary").innerHTML = Animal.Color;
}