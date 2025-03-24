

// let number1,number2

// arr = [100,200,300,400]

// number1 = arr[0]
// number2 = arr[1]

// console.log(number1,number2)


// destruckting

/* burasi calismadi 

// daha da kisa kullanabiliriz 
// let num1,num2

// arr = [100,200,300,400]

// [num1,num2] = arr
//  [number1,number2] = [100,200,300,400] number1 0. index number2 1.indexe geciyor otomatik

// console.log(num1,num2)
*/

// daha kisa bir yontem 
/*
arr = [100,200,300,400]
const [number1,number2] = arr

console.log(number1,number2);
*/

// obje Destructing

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// }

 // objenin icinden alindigi icin kareli parantez degilde suslu parantez kullaniriz
 /* 
bu sekilde undefined olur cunku yuakrida ki degisken isimlerine number1, number2, number3 ver diyor
const {number1,number2,number3} = numbers
console.log(number1,number2,number3);
*/
/* 
normalde boyle yaziliyor
const {a,c,e} = numbers
console.log(a,c,e);
*/
/* 
burada a yerine number1 c yerine number2 e yerine number3 kullanmak istedim bu sekilde oldu 
const {a:number1,c:number2,e:number3} = numbers
console.log(number1,number2,number3);
*/

// function destructing
/*
const getLangs = () => ["Python","Java","C++"]

const [lang1,lang2,lang3] = getLangs()

console.log(lang1,lang2,lang3);
*/

// obje 
/*
const person = {
    name:"Emre Er",
    year: 2001,
    salary: 11452,
    showInfos : () => console.log("bilgiler gosteriliyor")
}

const {name,year,salary,showInfos} = person
console.log(name,year,salary);
showInfos()
*/




