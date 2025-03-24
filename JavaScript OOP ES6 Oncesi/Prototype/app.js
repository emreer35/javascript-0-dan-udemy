// const object = new Object() // object literal
// const object2 = new Object()
// object.name = "yunus emre"
// console.log(object);
/*
function Employee(name,age){
    this.name = name
    this.age = age
    this.showInfos = () => {
        console.log("Bilgiler Gosteriliyor");
    }
    this.toString = () =>{
        console.log("bu bir employee objesidir...");
    }
}

const emp1 = new Employee("yunus emre", 22)
console.log(emp1);
console.log(emp1.toString());
*/

function Employee(name,age){
    this.name = name
    this.age = age
    // this.showInfos = ()=>{
    //     console.log("isim : " + this.name + "Age : " + this.age);
    // } her objede bunu kullanmak yerine protoye yazariz
}
Employee.prototype.showInfos = function(){
    console.log("Name : " + this.name + " Age : " + this.age);
}



const emp1 = new Employee("yunus emre", 22)
const emp2 = new Employee("sueda ovalioglu", 21)
emp2.showInfos()

console.log(emp1)
console.log(emp2)
