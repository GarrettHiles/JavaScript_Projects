//This adds text to the screen with a button that took me 2 whole nights to figure out.
function First_Function() {
    var str= "Displayed with the paragraph element by button click." 
    document.getElementById("Button_Text").innerHTML = str;
    
}
//This is the click on a paragraph element to change the text
function myFunction() {
    var sentence = "I am getting ";
    sentence += " some bananas from the store"
    document.getElementById("Concatenate").innerHTML = sentence;

}