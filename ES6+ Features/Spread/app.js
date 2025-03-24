

// const langs = ["Python","Java","c++","Php"]

// console.log(langs[0],langs[1],langs[2],langs[3]);

// Spread Operator
// console.log(langs[0],langs[1],langs[2],langs[3]); bu degeri asagidaki gibi yazabiliriz
// console.log(...langs);

// const langs2 = ["javaScript","C#",langs[0],langs[1],langs[2],langs[3]] eski yontem
// const langs2 = ["javaScript","C#",...langs] // yeni yontem


// console.log(langs2)

// const numbers = [1,2,3,4,5,6,7,8,9]

// // const [a,b] = numbers
// const [a,b,...numbers2] = numbers

// // console.log(a,b);

// console.log(numbers2);



// const addNumbers = (a,b,c) => console.log(a+b+c);

// const numbers = [100,200,300]

// addNumbers(numbers[0],numbers[1],numbers[2])  // eski yontem

// addNumbers(...numbers)

const addNumbers = (a,b,c) => console.log(a+b+c);

const number = [100,200,300]
addNumbers(number[0],number[1],number[2])
addNumbers(...number)





