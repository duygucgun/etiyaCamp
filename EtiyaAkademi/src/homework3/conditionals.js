//if
var date = new Date();
var hour = date.getHours();

if(hour >5 && hour<11){
    alert("Good morning!");
}
else if (hour> 11 && hour<17){
    alert("Good afternoon!");
}
else if (hour>17 && hour<23){
    alert("Good evening!");
}
else{
    alert("Good night!");
}

//switch

var language = prompt ("What is your language?");

switch (language){
    case"fr":
    alert("French");
    break;
    case"tr":
    alert("Turkish");
    break;
    default:
        alert("English");
        break;
}