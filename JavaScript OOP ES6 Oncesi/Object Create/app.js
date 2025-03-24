/*
const obj = {
    test1:function(){
        console.log("test 1 ");
    },
    test2:function (){
        console.log("test 2");
    }
}
// console.log(obj)

const emp = Object.create(obj)
emp.name = "yunus emre"
emp.age = 22

console.log(emp);
*/


// KALITIM 
/*
function Person() {
    
}
Person.prototype.test1 = function (){
    console.log("test 1 ");
}
Person.prototype.test2 = function(){
    console.log("test 2");
}

function Employee(name,age){
    this.name=name
    this.age=age
}
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.myTest = function(){
    console.log("myTest");
}

const emp = new Employee("yunus emre", 22)
console.log(emp);
*/

function Numbers(){

}
Numbers.prototype.number1 = function(){
    console.log("Number = 1");
}
Numbers.prototype.number2 = function(){
    console.log("Number = 2");
}

function Person(name,age){
    this.name=name
    this.age = age
}
Person.prototype = Object.create(Numbers.prototype)
Person.prototype.myTest = function(){
    console.log("myTest");
}
const hum = new Person("yunus emre",22)
console.log(hum);