//  Syntactic Sugar 
// ES6 Oncesi
/*
function Employee(name,age,salary){
    this.name = name
    this.age = age
    this.salary = salary
}
Employee.prototype.showInfos = function(){
    console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
}

const emp = new Employee("yunus emre ", 22 , 145000)

console.log(emp);
*/

// ***********************************************************************************
// ES6 Sonrasi
// ***********************************************************************************
class Employee{

    constructor(name,age,salary){ // constructor
        this.name = name
        this.age = age
        this.salary = salary
    }
    showInfos(){
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
    }
}
const emp = new Employee("yunus emre",22,14500)
// console.log(emp);

emp.showInfos()