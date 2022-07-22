var sayi1 = 10;
sayi1 = "Duygu Uçgun"
console.log (sayi1);

var sayi1 = 10;
var sayi1 = "Duygu Uçgun"
console.log (sayi1);


let sayi1 = 10;
let sayi1 = "Duygu Uçgun"
console.log (sayi1);

let sayi1 =10;
sayi1 = "Duygu Uçgun"
console.log(sayi1);

let sayi1 =10;
sayi1 = "Duygu Uçgun"
//let student= {id:1, name:"Duygu"}
console.log(student);

function save(){
console.log("Saved")
}
save();


function save(ogrenci){
console.log(ogrenci)
}
save();

//undefined

function save(ogrenci){
console.log(asdasd)
}
save();

//asdasd



function save(ogrenci){
console.log(ogrenci)
}
save(student);
//{id:1, name:"Duygu"}


function save(ogrenci){
console.log(ogrenci)
}
save(15);
// 15

function save (ogrenci, puan=10){
console.log(ogrenci.name+ " : "+ puan)
}
save(student, 100);
//Duygu : 100


function save (puan=10, ogrenci){
console.log(ogrenci.name+ " : "+ puan)
}
save(student);
//hata verir


function save (puan=10, ogrenci){
console.log(ogrenci.name+ " : "+ puan)
}
save(undefined,student);
// Duygu:10







//let students = ["Engin Demiroğ" , "Duygu Uçgun", "Halit Kalaycı"]
console.log(students);
// "Engin Demiroğ" , "Duygu Uçgun" , "Halit Kalaycı"


//let students2 = [student, {id:1 , name: "Duygu Uçgun"}]
console.log(students2);

//let students2 = [student, {id:1 , name: "Duygu Uçgun"}, "Ankara", {city:"İstanbul"}]
console.log(students2)

var sayi1=10;
sayi1="Duygu";
console.log(sayi1)
//let sayi2=15;
//let sayi2= "Duygu";
// console.log(sayi2)

let student={id:1, name:"Duygu"};
console.log(student);

function save(ogrenci){
    console.log(ogrenci)
}
save(15); 




let students=["Duygu","Begüm","Yaren"];
console.log(students);

let students2=[student,{id:2,name:"Duygu"}];
console.log(students2);



let showProducts=function (id,...products){
    console.log(id)
    console.log(products)
}
showProducts(1,"Elma","Armut","Karpuz")

let points=[1,15,24,3,65,98]
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG")


let populations=[5000,6000,7000]
let [small,medium,high]=populations;
console.log(small)

let category={id:1,name:"İçecek"};
console.log(category.id);
console.log(category["name"])






class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}

let customer=new Customer(1,"1234")
customer.name="Duygu Ucgun";
console.log(customer.name)
console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super()
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super()
        this.companyName=companyName
    }
}






let products=[
    {id:1,name:"Dell",unitPrice:1000},
    {id:2,name:"ASUS",unitPrice:8000},
    {id:3,name:"Monster",unitPrice:5000},
    {id:4,name:"Casper",unitPrice:3000},
    {id:5,name:"ACER",unitPrice:2000},

]
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}<li>`))
console.log("<ul>")


let filteredProducts= products.filter(product=>product.unitPrice>3000)
console.log(filteredProducts)

let cartTotal=products.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(cartTotal)


let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)
console.log(cartTotal2)