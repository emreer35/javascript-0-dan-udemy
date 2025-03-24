// for in | object array uzerinde geziniyoruz
// for of | objelerin uzerinde gezinemiyoruz

const person = {
    name: "emre" , 
    age: 25 ,
    salary: 3000
}
const langs = ["Pyhton","JavaScript","C#"]

const name = "Yunus emre"
// for in obje 
/*
for (let value in person){
    console.log(value, person[value])
}
*/

/*
for (let prop in langs){
    console.log(prop)
    // arraylari for in dongusu ile yazdirirsak sadece indexleri uzerinde gezinmis oluruz
    // ciktisi 0 1 2 
}
// array
for (let array in langs) {
    console.log(array,langs[array]);
    // bunun ciktisi da 0 P 1 JS 2 C#
}
// string 
for (let index in name) {
    console.log(index,name[index]);
}
*/


// For of
/*
for (let value of person){
    console.log(value);
    // burada gezinemiyoruz cunku person object
}
*/
// for (let value of langs){
//     console.log(value);
// }
/*
for (let character of name){
    console.log(character);
}
*/






// for (let value in person){
//     console.log(value,person[value]);
// }
// for (let value in name){
//     console.log(value,name[value]);
// }
// for (let value in langs){
//     console.log(value,langs[value]);
// }

// for (let value of person){
//     console.log(value);
// // }
// for (let value of langs){
//     console.log(value);
// }
// for (let value of name){
//     console.log(value);
// }
