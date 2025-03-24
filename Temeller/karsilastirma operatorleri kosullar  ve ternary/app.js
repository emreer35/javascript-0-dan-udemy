// karsilastirma operatorleri 

// == esit esit operatoru
// === degerler ve tipler aynimi 
// != esit degil midir
// !==
// >
// <
// >=
// <=

console.log(2 == 2) // true doner
console.log("js"=="java") // false doner

console.log(2 == "2") // baska dillerde boyle karsilastirma yapilmiyor 
// bir tarafta sayi bir tarafta string varsa sayi otomatik olarak stringe cevrilir 
// true doner
console.log(2 === "2") // false doner

console.log(4 > 2) // true
console.log(2 > 4) // false
console.clear()

console.log(2 != 4) // true
console.log(2 !== "4") // true

console.log(4 >= 2) // true
console.log(2 >= 2) // true



// mantiksal baglaclar
console.clear()


// not operatoru  !
console.log(!(2!=2))

// and operatoru && hepsi true olmasi gerekiyor

console.log((2==2) && ("ahmet"=="ahmet"))

// or operatoru || en az bir tanesi true olmalidir

console.log((2==3) || ("ahmet"=="ahmet"))

// if else bloklari

// const error = false

// if(error == true){
//     console.log("hata olustu")
// }
// else {
//     console.log("hata olusmadi")
// }

// const user ="ttt"

// if(user === "mmc"){
//     console.log("kullanici bulundu")
// }
// else{
//     console.log("kullanici bulunamadi...")
// }

/*
const process = "1"


if(process === "1"){
    console.log("islem 1")
}
else if(process=== "2"){
    console.log("islem 2")
}
else if(process === "3"){
    console.log("islem 3")
}
else if(process=== "4"){
    console.log("islem 4")
}
else{
    console.log("islem gorulmedi")
}
*/

// const number = 100

// if(number === 100){
//     console.log("sayi 100 e esit")
// }
// else{
//     console.log("sayi 100 e esit degil")
// }

//if else in kisa yazimi 

// ternary operatoru 
// console.log(number === 100 ? "sayi 100" : "sayi 100 degil")

// if else de 1 satir kod yazacaksan suslu paranteze gerek yok
// if(number===100) console.log("sayi 100 e esit")
// else console.log("sayi 100 e esit degil")

console.clear()

const process = 2

switch(process){
    case 1:
        console.log("islem 1")
        break
    case 2:
        console.log("islem 2")
        break
    case 3:
        console.log("islem 3")
        break
    default:
        console.log("gecersiz islem")
        break // istersen kullan istersen kullanma
}





