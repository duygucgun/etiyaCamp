function validate() {
    var numberEntered = document.getElementById("numberBox");
    if (numberEntered.checkValidity() == false) {
        document.getElementById("demo").immerHTML = numberEntered.validationMessage;
    }
    else {
        document.getElementById("demo").innerHTML = "Input OK";
    }
}