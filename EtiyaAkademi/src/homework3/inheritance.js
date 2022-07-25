function Person(firstName, lastName){
    this.firstName=firstName;
    this.lastName = lastName;
}

function Student (favoriteCourse){
    this.favoriteCourse=favoriteCourse;
}

Student.prototype = new Person ("Duygu", "Ucgun");
var duygu = new Student ("Programming");
alert (duygu.firstName + "" + duygu.lastName + "loves" + duygu.favoriteCourse);