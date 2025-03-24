// console.log(window);
// console.log(this); // Global scope da en temel objesi window object
/*
const emp1 = { // Object Literal 
    name:"yunus emre",
    age:22,
    showInfos : () => { console.log("bilgiler goruntuleniyor")}
}

const emp2 = {
    name:"sueda ovalioglu",
    age:21
}
emp1.salary = 4000
emp1.showInfos()
emp2.salary = 4000


console.log(emp1);
*/

/*
function Employee(){  // yapici fonksiyon - Constructer
    this.name = "yunus emre"
}
// const date = new Date()
const emp1 = new Employee()
const emp2 = new Employee()
console.log(emp1);
console.log(emp2);
*/

function Employee(name,age,salary) {
    this.name = name
    this.age = age
    this.salary = salary
    this.showInfos = () => console.log(this.name,this.age,this.salary)
    // this objesi bulunan objemizi gosteriyor

    // console.log(this); // constructer icinde kullandigimiz icin icindeki degerleri verdi
}
console.log(this); // global scopta kullandigimiz icin window verdi
const emp1 = new Employee("yunus emre",22,11452)
const emp2 = new Employee("sueda ovalioglu",21,25000)
// console.log(emp1);
// console.log(emp2);

emp1.showInfos() 
emp2.showInfos()






