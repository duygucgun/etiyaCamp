function Customer(first, last, city, country, age){
    this.first=first;
    this.last=last;
    this.city=city;
    this.age=age;
    this.country=country;
}
var someCustomer = new Customer ("Duygu", "Ucgun", "Ankara", "Turkey", 25);

Customer.prototype.eMail ="duygucgun@gmail.com";
Customer.prototype.fullName = function(){
    return this.first + "" + this.last;
};
alert(someCustomer.city);
alert(someCustomer.eMail);
alert(someCustomer.fullName());