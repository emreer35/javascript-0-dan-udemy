// ***********************************************************************************
// ES6 Oncesi
// ***********************************************************************************
/*
function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.showInfos = function(){
    console.log("Name : " + this.name);
    console.log("Age :" + this.age );
}
function Employee(name,age,salary){
    Person.call(this,name,age)
    this.salary = salary
}

Employee.prototype = Object.create(Person.prototype)

Employee.prototype.showInfos = function(){
    console.log("Name : " + this.name);
    console.log("Age :" + this.age );
    console.log("Salary :" + this.salary);
}
Employee.prototype.toString = function(){
    console.log("Employee");
}

const emp = new Employee("yunus emre" , 22, 14500)
console.log(emp);
*/

// ***********************************************************************************
// ES6 Sonrasi
// ***********************************************************************************

class Person { // SuperClass, BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log("Name :" + this.name);
        console.log("Age :" + this.age);
    }
}
class Employee extends Person { // DerivedClass , SubClass , ChildClass
    constructor(name,age,salary){
        // this.name = name
        // this.age = age   // this ile yaptigimiz islemlerin aynisini yapiyoruz
        super(name,age) // call apply yerine super kullaniyoruz
        this.salary = salary
    }
    showInfos(){ // Overriding
        console.log("Name : " + this.name);
        console.log("Age : " + this.age );
        console.log("Salary : " + this.salary);
    }
    toString(){ // Overriding
        console.log("Employee");
    }
    raiseSalary(amount){ // ekstra
        this.salary += amount
    }
}

const emp = new Employee("yunus emre",22,15000)
// console.log(emp);
emp.showInfos()
emp.toString()
emp.raiseSalary(1000)
emp.showInfos()


