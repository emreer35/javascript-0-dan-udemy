/*

// destructing
arr = [100,200,300,400]
let num1,num2

[num1,num2] = arr

console.log(num1,num2);

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}
// const {number,number1,number2} = numbers
// console.log(number,number1,number2); // undefined
const {a,c,e} = numbers

console.log(a,c,e);
const {a:number1,c:number2,e:number3} = numbers
console.log(number1,number2,number2);

const data = () => [1,2,3,4,5]

const [n1,n2,n3,n4] = data()

console.log(n1,n2,n3,n4);

const person = {
    name:"yunusemre",
    surname:"er",
    salary:12000,
    showInfos : ()=>{
        console.log("bilgiler gosteriliuyor");
    }
}

const {name,surname,salary,showInfos} = person

console.log(name,surname,salary);
showInfos()


const mySet = new Set()
mySet.add(100)
mySet.add(100) //bir degeri bir kere aldigi icin hata vermeyecek ama calistirmayacak
mySet.add(3.14)
mySet.add("yunus emre")
mySet.add(true)
mySet.add([1,2,3])
mySet.add({a:1,b:2})
console.log(mySet);

const array = Array.from(mySet)

console.log(array);

mySet.forEach((value)=>{
    console.log(value);
})

const users = [
    {name:"yunus emre", age : 22,city:"izmir"},
    {name:"sueda", age : 21,city:"izmir"},
    {name:"luna",age : 1,city:"izmir"}
]

const names = users.map((user)=>{
    return user.name
})
const age = users.map(user =>{
    return user.age * 2
})
const cities = users.map(user =>{
    return user.city
})

console.log(names,age,cities);


for (let value in person){
    console.log(value,person[value]);
}

for (let user of users){
    // arraylarda for of kullanmak ya da foreach kullanmak daha iyi
    console.log(user.name,user.age,user.city);
}

const myMap = new Map()
const key1 = "yunus emre"
const key2 = [1,2,3]
const key3 = () => "async"

myMap.set(key1,"string")
myMap.set(key2,"array")
myMap.set(key3,"function")

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));


console.log(myMap);


const cities1 = new Map()

cities1.set("izmir","35")
cities1.set("istanbul","34")
cities1.set("antalya","7")

cities1.forEach((value,key)=> {
    console.log(key,value);
})


for(let key of cities1.keys()){
    console.log(key);
}


const city = [["istan","izmir"]]

const arr2= new Map(city)

console.log(arr2);

console.log(array);



const obj = {
    test1:()=> {
        console.log("test 1");
    },
    test2:()=>{
        console.log("test 2");
    }
}

// console.log(obj);

const emp = Object.create(obj)
emp.name = "yunus emre"
emp.age = 22
console.log(emp);
console.clear()
*/
/*
function Person() {
    
}

Person.prototype.test1 = ()=>{
    console.log("test 1");
}
Person.prototype.test2 = () =>{ 
    console.log("test 2");
}

function Employee(name,age) {
    this.name = name
    this.age = age
}

Employee.prototype = Object.create(Person.prototype)

const emp1 = new Employee("yunus emre",22)
Employee.prototype.myTest = () => {
    console.log("My Test");
}
emp1.test1()
console.log(emp1);
*/

/*
const User = {
    login: function() {
        console.log(`${this.username} logged in`);
    },
    logout: function(){
        console.log(`${this.username} logged out`);
    }
}
    


function createUser(username) {
    let user = Object.create(User)
    user.username = username
    return user
}

const user1 = createUser("Emre")
user1.login()

const user2 = createUser("alice")
user2.logout()
*/
/*
const sayUserName = {
    sayMyName: function() {
        console.log(`My name is ${this.name} `);
    }
}

const emp = Object.create(sayUserName)
emp.name = "Sueda"
emp.sayMyName();

*/
/*
function Person(name){
    this.name = name;
}

function Employee(name,age){
    // This Employee'yi Gösteriyor 
    // ES6 sınıflarında kullandığımız super() gibi Person yapıcı metodunu kullanıyoruz.
    Person.call(this,name); 
    this.age = age;

}
const emp1 = new Employee("Mustafa",25);

console.log(emp1.name);
console.log(emp1.age);
*/
/*
const obj1 = {
    number1:10,
    number2:20
}
const obj2 = {
    number1:50,
    number2:80
}
function plus(number3,number4){
    console.log(this.number1+this.number2 +number3+number4);
}

plus.call(obj2,100,200)
plus.apply(obj1,[100,200])


function getNumberTotals(number3,number4) {
   return this.number1+this.number2 +number3+number4
}

const copyFunct = getNumberTotals.bind(obj1)
console.log(copyFunct(100,300));
*/
/*
function Person(name,age) {
    this.name = name,
    this.age = age
}
Person.prototype.showInfos = function(){
    console.log("name: " + this.name + " Age: " + this.age);
}

// const person = new Person("yunus emre", 20)
// person.name = "yunus erme"
// person.age = 22
// console.log(person);


function Employee(name,age,salary) {
    // this.name = name,
    // this.age = age,

    Person.call(this,name,age)
    this.salary = salary
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.toString = function () {
    console.log("employee");
}
Employee.prototype.showInfos = function () {
    console.log("name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
}

const emp = new Employee("yunus emre",22,30000)
// emp.name = "emre"



// emp.showInfos()
// emp.toString()
const person = new Person()
console.log(emp);
*/

/*
function SetTimeDM(day,month) {
    this.day = day
    this.month = month
    
}
const timeSet = new SetTimeDM(29,"March")
console.log(timeSet);

function SetTimeDMY(day,month,year){
    SetTimeDM.call(this,day,month)
    this.year = year
}

const dmy = new SetTimeDMY(19,"September",2002)

console.log(dmy);
*/
/*
function Employee(name,age,salary) {
    this.name = name
    this.age = age
    this.salary = salary
}
Employee.prototype.showInfos = function () {
    console.log("name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
}

const emp = new Employee("yunus emre",23,17002);
console.log(emp);
*/
/*
class Employee {
    constructor(name,age,salary) { //constructor
        this.name = name
        this.age = age
        this.salary = salary
    }
    showInfos () {
        console.log("name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
    }
}

const emp = new Employee("yunus emre",23,17002)
console.log(emp);
emp.showInfos()
*/
/*
class Matematik {
    cube(x) {
        console.log(x*x*x); 
    }
}
const math = new Matematik()
math.cube(3)
*/
/*
class Matematik{
    sqrt(x){
        console.log(x*x);
    }
    static cube(x) {
        console.log(x*x*x);
    }
}
const math = new Matematik()
Matematik.cube(3)
math.sqrt(2)

console.log(math);
*/

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    showInfos(){
        console.log("Name : " + this.name + " Age : " + this.age);
    }
}

class Employee extends Person{
    constructor(name,age,salary){
        super(name,age)
        this.salary = salary
    }
    raise(amount) {
        this.salary += amount
    }
}
const emp = new Employee("yunus emre", 23, 20000)
emp.raise(10000)

console.log(emp);