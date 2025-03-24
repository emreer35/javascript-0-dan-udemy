// MAPS - KEY(anahtar) - VALUE(deger)  has delete clear
/*
let myMap = new Map()

// console.log(typeof myMap);
// console.log(myMap);


const key1 = "yunus emre"
const key2 = {a:10,b:20}
const key3 = () => 2 


// set methods

myMap.set(key1,"string deger")
myMap.set(key2,"Object Literal Deger")
myMap.set(key3,"Function Deger")
*/
/*
// get methods

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));


// console.log(myMap);
*/

//  Map Boyutu 

/*
kac deger var
console.log(myMap.size);
*/

// const cities = new Map()

// cities.set("Ankara",5)
// cities.set("Istanbul",15)
// cities.set("Izmir",4)

// last maple alakali set

// cities.set("adana","hizli genceler")

// For Each
/*
cities.forEach((value,key) => {
    console.log(key,value);
})
*/

// FOR OF
/*
for (let value of cities){
    console.log(value) // array seklinde yazdi 
}

for (let [key,value] of cities) { // burada destructing yapisi var
    console.log(key,value); 
}
*/

// MAP KEYS  
// sadece anahtarlari alacagiz
/*
for (let key of cities.keys()){
    console.log(key); // sadece key kismini aldik 
}
*/

// MAP VALUES
// sadece values i alacagiz 
/*
for (let values of cities.values()){
    console.log(values); // sadece value kismini aldik 
}
*/

// Arraylerden MAP olusturma
/*
console.log(cities);

const array = [["key1","value1"],["key2","value2"]]

const lastMap = new Map(array)

console.log(lastMap);
*/
/*
const cities = new Map()

cities.set("Ankara",5)
cities.set("istanbul",15)
cities.set("izmir",10)
// [["Ankara",5],[istanbul",15],["izmir",10]] bu sekilde yaziliyor arraylar
const array = Array.from(cities)

console.log(array);
*/

// *****************************************************************************************
// alistirma 

/*
const myMap = new Map()
const key1 = "yunus emre"
const key2 = 300
const key3 = ()=> 2
const key4 = {a:20,b:39}

myMap.set(key1,"string deger")
myMap.set(key2,"number")
myMap.set(key3,"function")
myMap.set(key4,"object deger")

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));
console.log(myMap.get(key4));

console.log(myMap.size);
myMap.forEach((value,key)=>{
    console.log(key,value);
})

const cities = new Map()
cities.set("ankara",5)
cities.set("izmir",15)
cities.set("istanbul",20)

cities.forEach((value,key)=>{
    console.log(key,value);
})

for (let [key,value] of cities){
    console.log(key,value);
}

const array = [["ankara",5],["istanbul",15]]
const citi = new Map(array)
console.log(citi);

console.clear()
const people = new Map()
people.set("human1",15)
people.set("human2",20)
people.set("human3",35)

const ar = Array.from(people)
console.log(ar);
*/





