// Setler - Kumeler
// setler her degeri sadece 1 defa tasiyor
// const mySet = new Set()

// mySet.add(100)
// mySet.add(100) //bir degeri bir kere aldigi icin hata vermeyecek ama calistirmayacak
// mySet.add(3.14)
// mySet.add("yunus emre")
// mySet.add(true)
// mySet.add([1,2,3])
// mySet.add({a:1,b:2})
// console.log(mySet);

// baska turlu set olusturma 

// const mySet2 = new Set([100,3.14,"yunus emre"]) // arrayden set olustruma 
// console.log(mySet2);

// size 
// size ile kac tane deger aldigini gorebiliyoruz
// console.log(mySet.size);

// delete method
// degeri verecegiz o deger silinecek o deger yoksa hata vermeyecek

// mySet.delete("yunus emre")
// console.log(mySet);

// HAS method
// var mi yok mu 
/*
console.log(mySet.has("yunus emre")); //true
console.log(mySet.has(3.14)); // true
console.log(mySet.has(2000)); // false
console.log(mySet.has([1,2,3])) // olmasina ragmen false cunku referance veri tipi
*/

// foreach loop

// mySet.forEach((value)=>{
//     console.log(value);
// })

// for of dongusu

// for (let value of mySet){
//     console.log(value);
// }

// setten aray olusturma 
// const array = Array.from(mySet)

// console.log(array);

const mySet = new Set()
mySet.add(100)
mySet.add(true)
mySet.add("yunus emre")
mySet.add({a:20,b:30})
mySet.add(function(){2})
mySet.add(3.14)
mySet.add([1,3,4,5])

console.log(mySet);

const myset2 = new Set([100,3.14,"yunus emre",[1,2,3,4,5]])
console.log(myset2);
console.log(mySet.size);
console.log(myset2.size);

console.log(mySet.has("yunus emre"));
console.log(mySet.delete(100));
console.log(mySet);
console.clear()

mySet.forEach((value)=>{
    console.log(value);
})

for (let value of mySet){
    console.log(value);
}


const array = Array.from(mySet)
console.log(array);








