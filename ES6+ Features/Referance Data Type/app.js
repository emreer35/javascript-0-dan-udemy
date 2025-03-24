// primitive veri tipi
// degerler kiyaslaniyor
/*
let a = "emre"
let b = "emre"
if (a === b){
    console.log("esit");
}

*/
// referance Data Type
// bellekte ki adresler kiyaslaniyor
// let array1 = [1,2,3,4,5]
// let array2 = [1,2,3,4,5]
// if (array1 === array2){ // referance veri tiplerinde esitlik kontrol ediyorsak 
//                         // icindeki degere bakmiyor bu referanslar bellekte ayni yeri gosteriyor
//                         // mu diye kontrol ediyor
//     console.log("esit");
// }


// objelerde referance veri tipi 

/*
const person1 = {
    name:"emre",
    age:22
}
const person2 = {
    name:"emre",
    age:22
}
if (person1 === person2){
    console.log("esit");
    // adresleri kiyasladigimiz icin yine esit cikmadi 
}
*/

const cities = new Map()

cities.set("ankara",5)
cities.set("istanbul",15)

// console.log(cities.get("ankara")) // burada primitive veri tipiyle arama yapiyor
/*
cities.set([1,2,3],"array")
// yukarida ki farkli bir yeri asagidaki farkli bir yeri gosteriyor
console.log(cities.get([1,2,3])) // undefined bir degerle karsilasiyoruz
*/
// bunun icin ne yapabilirz
const key = [1,2,3]
cities.set(key,"Array")

console.log(cities.get(key)); // array degerini alabiliyoruz biz 

// is mulakatlarinda bunlar sorulur dikkat et






