function friendsNumber(number1,number2) {
    let total1 = 0;
    let total2 = 0;

    for (let i=1; i < number1; i++){
        if(number1 % i == 0){
            total1 += i;
        }
    }

    for (let j = 1; j < number2; j++){
        if(number2 % j ==0){
            total2 += j;
        }
    }
    if (number1 == total2 && total1 == number2){
        console.log("Numbers are frined numbers");
    }
    else{
        console.log("Numbers are not friend numbers");
    }
}

friendsNumber(17296,18416);
friendsNumber(220,284);