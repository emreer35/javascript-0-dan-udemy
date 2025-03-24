// Keyboard Eventleri


// Keypress Eventi
/*
document.addEventListener("keypress",run)
function run(e){
    // sadece harfler ve rakamlar
    // console.log("naber")
    // console.log(e.which) hangi tusa basildigini soyluyor ascii tablosunda 
    // console.log(e.key) // hangi harfe bastigimizi goruyoruz  
    
}
*/
/*
// Keydown Eventi
tum tuslari gosterir bastigimiz an calisir

document.addEventListener("keydown",run)
function run(e){
    console.log(e.key)
}
*/
/*
// Keyup Eventi
sadece bir tusu biraktigimiz an calisir 

document.addEventListener("keyup",run)
function run(e){
    console.log(e.key)
}
*/

const cardheader = document.querySelector(".card-header")
const todoInput = document.getElementById("todo")

todoInput.addEventListener("keyup",changetext)

function changetext(e){
    cardheader.textContent = e.target.value // ne yazarsak aynisi cardheader in textine yaziliyor

    // console.log(e.target.value) // value de ki degeri getiriyor 
}




