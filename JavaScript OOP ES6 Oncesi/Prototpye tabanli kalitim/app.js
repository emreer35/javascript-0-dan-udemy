// Kalitim - Inheritance

function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.showInfos = function(){
    console.log("Name: " + this.name + " Age: " + this.age);
}

// const person = new Person("yunus emre ",22)
// console.log(person);

function Employee(name,age,salary){
    // this.name=name
    // this.age=age
    Person.call(this,name,age)
    this.salary=salary
}
// const emp = new Employee("yunus emre" , 22 , 18000)
// console.log(emp);

Employee.prototype = Object.create(Person.prototype) // emp protosunu persona bagladik

Employee.prototype.toString = function(){
    console.log("Employee");
}
// ***********************************************************************************
// Overriding - Iptal Etme 
// ***********************************************************************************
Employee.prototype.showInfos = function(){
    console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
}

const emp = new Employee("yunus emre", 22, 18000)
// console.log(emp);
emp.showInfos()

emp.toString()

console.log(emp);
