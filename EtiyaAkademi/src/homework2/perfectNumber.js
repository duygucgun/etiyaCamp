function perfectNumber() {    
    
    for (let i = 1; i < 1000; i++) {
        let j=1;
        let sum=0;
        while(j <= i/2){
            if (i%j==0) {
               sum=sum+i 
            }
            j=j+1
        }
        if (i==sum) {
            console.log(i + "Perfect number")
        }
    }
    
}

perfectNumber();