// while loops

// let i = 0 

// while(i<10){  // infinity loop
//     console.log(i)
//     i+=1 // i++
// }



// let j = 10

// while(j > 0){
//     console.log(j)
//     // j--
//     j-=2 // her defasinda 2 azalarak 
// }

// break and continue



// let i = 0
// while(i<10){
//     console.log(i)
//     if (i==5){
//         break
//     }
//     i++
// }

// let i = 0 
// while(i<10){ // sonsuz dongu
//     if (i==3 || i==5){
//         i++
//         continue
        
//     }
//     console.log(i)
//     i++
// }



// DO WHILE LOOPS
// en az bir defa calisma garantisi var 

// let i = 0
// do {
//     console.log(i)
//     i++
    
// }while(i < 10)



// FOR DONGUSU

const langs = ["Python","JavaScript","Java"]

// let index = 0

// while(index < langs.length){
//     console.log(langs[index])
//     index++
// }

// 1. indexi baslat kosulu yaz artirmayi yap

// for(let index = 0 ; index < langs.length ; index++ ){

//     console.log(langs[index])

// }


// tek tek elemanlarin uzerinde gezinme iterasyon



// FOREACH LOOPS
// langs.forEach(function(as,index){
//     console.log(as,index)
// })


// MAP OPERATORU
// const users = [ // obje 
//     {name:"yunus emre", age : 22,city:"izmir"},
//     {name:"sueda", age : 21,city:"izmir"},
//     {name:"luna",age : 1,city:"izmir"}

// ]



// const names = users.map(function(user){
//     return user.name
// })
// const ages = users.map(function(user){
//     return user.age
// })
// const cities = users.map(function(user){
//     return user.city
// })
// console.log(names)
// console.log(ages)
// console.log(cities)


// FOR IN Loops

const user = {
    name:"emre"
,   age:22
}
for (let key in user){
    console.log(key,user[key])
}

