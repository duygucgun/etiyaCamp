function primeNumber(...number) {
    for (let j = 0; j < number.length; j++) {
        
        let counter=0;
        for (let i = 2; i < number[j]; i++) {
            if (number[j]%i==0) {
                counter+=1
            }
            
        }
        if(counter==0){
            console.log(number[j] + " Number is prime")
        }
        else{
            console.log(number[j] + "Number is not prime")

        }
    }
}

primeNumber(5,19,23,59);