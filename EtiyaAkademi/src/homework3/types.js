//String, Number, Boolean

var student = "Duygu Uçgun";
student = student.substring(1,4);
var value = 10;
value = "Salih Demiroğ";
var student2= student;
var isItTrue = true;


document.getElementById("demo").innerHTML = student;

//Array

//var student = new Array ("Engin Demiroğ", "Duygu Uçgun" , "Tolga Ayas");
var students = ["Engin Demiroğ" , "Duygu Uçgun" , "Tolga Ayas", 25];
console.log(students[1])
students[1] = "Ecem";
students.push("Yaren"); //Eleman Ekliyor.
students[5] = "Derin Demiroğ"; // 5.elemana Derin Demiroğ ekliyor.
console.log(students[5]);
students[students.length] = "Derin Demiroğ" // Length eleman sayısını verir. 


//Object

var student = { firstName: "Duygu ", lastName:"Uçgun", city:"Ankara"};
student.firstNanem = "Ecem";
console.log(student.firstName);

//Loose Typing
//Gevşek typing 
var number = 10;
number = "Duygu" 
//number = new Object();
alert (number)


//Dynamic Typing
var customer ={
    id:1,
    conctactName: "Duygu Uçgun",
}
customer.country = "Turkey";
customer.sayHello = function (){
    alert("Hello" + this.contactName);
}
customer.sayHello();