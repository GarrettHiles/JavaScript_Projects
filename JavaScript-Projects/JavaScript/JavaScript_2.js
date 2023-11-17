//alerts the page if the inputs have no content in them when you try to submit the form
function validate() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");

    if(fname.value == "" ||lname.value == "" || email.value == ""){
        alert("Please fill all the inputs.")
    }
    else{

    }
}