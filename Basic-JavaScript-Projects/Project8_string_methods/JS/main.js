
// adding a slip sentence into 1
function full_sentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//slice method and we cut out johnny so only he displays.
function slice_method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//search method that searches for boy. Result is in console log.
const text ="Kratos has a boy. boy leaves sometimes. boy returns.";
const result = text.search("boy");
console.log(result);
//toUpperCase method
function upperstuff() {
    let text = "What is poppin my dudes.";
    let result = text.toUpperCase();
    document.getElementById("up").innerHTML = result;
}
//Turns number into a string
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//limits the number length
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
//rounds the nuber at the fixed position
function fixedto() {
    var Y = 4.3675268;
    document.getElementById("Fixed").innerHTML = Y.toFixed(3);
}
// returns normal value of a string
function ofValue() {
    let text = "Hi mane";
    let result = text.valueOf();
    document.getElementById("Value").innerHTML = result.valueOf();
}