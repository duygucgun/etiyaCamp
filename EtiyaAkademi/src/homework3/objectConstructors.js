//This is a function inside an object 


var student ={
    firstName : "Duygu",
    lastName: "Ucgun",
    fullName: function (){
        return this.firstName + "" + this.lastName;
    }
}
alert(student.fullName());

//Object Constructor
//this in a object

function Customer(first, last, city, country, age){
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = counrty;
}
var someCustomer =new Customer ("Duygu", "Ucgun" , "Ankara", "Turkey" , 25)
alert(someCustomer.country);