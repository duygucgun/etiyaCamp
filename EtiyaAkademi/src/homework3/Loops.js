//For
for (var i = 0; i<10; i++){
    alert(i);
}


for (var i =0; i<=10; i++){
    if(i==5){
        //break
        continue;
    }
    alert(i);
}


//while

var number =1;
while (number <10){
    alert(number);
    number = number + 1;
}

//doWhile

var age = prompt("Your age?");
var result ="";
do {
    result += age;
    result+= "-";
    age--;
} while (age >0)
alert(result);

