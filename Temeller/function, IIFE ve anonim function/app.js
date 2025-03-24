// Fonksiyon tanimlama

// function merhaba(){
//     console.log("merhaba")
// }

// merhaba() // fonsksiyon cagrisi (function call)
// merhaba() // birden cok kez cagirabilirsin

// console.clear()

// function selam(name,age){
//     undefined a deger atama 
//     if(typeof name ==="undefined") name= "bilgi yok" // undefined => bilgi
//     if(typeof age=== "undefined") age="bilgi yok" // undefined => bilgi yok 
    
//     console.log(`Name: ${name} Age: ${age}`)
// }
// selam("yunus",22)
// selam("sueda",21)
// selam() // bizden name age i istiyor yazmazsak undefined (tanimsiz) gozukur
// console.clear()
// if kosullarina gerek kalmadan kisaca undefined i bilgi yok yazma

// function unde(name = "bilgi yok", age = "bilgi yok"){
//     console.log(`name: ${name} age: ${age}`)
// }
// unde()
// unde("yunus emre",22)
// unde("sueda", 21)
// unde("ahmet")

// -------- R E T U R N ---------

// RETURN suz

// function square(x){
//     console.log(x*x)
// }
// function cube(x){
//     console.log(x*x*x)
// }
// let a = square(12)

// a = cube(a) // Not a number

// return degeri fonksiyondan geri cikartir

// RETURN lu olan 

// function square(x){
//     return x*x
//     return den sonra gelen hicbir kod calismaz
//     console.log("naber") // calismaz cunku return var
// }

// function cube(x){
//     return x*x*x
//     return den sonra gelen hicbir kod calismaz
//     console.log("naber") // hicbir zaman calistirilmaz. 
// }
//  return square den aldi cube e gonderdi

// let b = cube(square(12))

// console.log(b)

// function merhaba(){
//     return "merhaba"
// }
// console.log(merhaba())

// function exprission

// function a isim vermedik cunku degisken uzerinden fonksiyon kullanabiliyoruz

// const merhaba = function(name= ""){
//     console.log("merhaba " + name)
// }

// merhaba() // yine ayni sekilde fonskiyon blogu gibi kullanabiliriz 
// merhaba("yunus emre")

// Immediately Invoked Function Expression (IIFE)
// tanimlandigi yerde calisabilen fonksiyon
 
// (function(name){
//     console.log("merhaba: " + name)
// })("yunus emre")

// ----- METHOD = FONKSIYON -----
// objenin icinde fonksiyon varsa method degilse fonksiyon

const database = {
    host: "localhost",
    add : function(){
        console.log("eklendi")
    },
    get : function(){
        console.log("elde edildi")
    },
    update : function(id){
        console.log(`Id: ${id} guncellendi`)
    },
    delete : function(id){
        console.log(`Id: ${id} silindi`)
    }
}

console.log(database.host)

database.add()

database.delete(10)









