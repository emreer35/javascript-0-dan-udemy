// console.log(this);

// setTimeout 
// islmemizin ne zaman yapilacagini gosterir
/*
setTimeout(function(){
    console.log("naber")
    // icerideki islem 3 saniye surerse toplam 5 saniyede olur 
},2000)
*/

// setInterval 
// islemi kac saniye araliklarla tekrarlamamizi saglar
/*
let i= 0
setInterval(function(){
    i++
    console.log(i);
    
},1000)
*/

// bu islemi nasil durduracagiz
// clearInterval

let i= 0
let value = setInterval(function(){
    i++
    console.log(i);
    
},1000)

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value)
})







