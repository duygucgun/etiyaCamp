function Customer(firstName, lastName){// constructor
    this.firstName = firstName; //public 
    this.lastName = lastName;


    var someField = "some value"; //private

    this.sendProduct() = function (){ //operation
        alert("Product sent!");
    }
}

var duygu = new Customer ("Duygu", "Ucgun")
duygu.sendProduct();
