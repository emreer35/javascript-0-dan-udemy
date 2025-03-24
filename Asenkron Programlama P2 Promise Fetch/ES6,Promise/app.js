/*
function getData(data){ // Promis objesini donduren fonksiyon
    return new Promise(function(resolve,reject){
        // resolve olumlu sonuc reject olumsuz sonuc
        setTimeout(function(){

            // 3 saniye dolasiya kadar
            // promisestatus = pending
            // promisevalue = undefined
            // 3 saniye sonra 
            // promisestatus = resolved(fulfilled) yada rejected
            // promisevalue = value degeri
            // resolve("Olumlu sonuc")
            reject("olumsuz sonuc")
        },3000)
    })
}
*/

// console.log(getData("merhaba")); // Biz
// resolve kullanirken then kullaniyoruz.
/*
getData("merhaba").then(function(response){ // buradaki response degeri resolve un valuesine esit icindeki degere esit  response u yazdirdigimiz zaman olumlu sonuc olarak donecek bize
    console.log(response);
})
*/
/*
// olumsuz sonucta reject kullanirken catch yapisini kullaniyoruz
getData("merha").catch(function(err){
    console.log(err);
})
*/
// example string degeri kontrol ettirip yazdirma 
/*
function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data === "string"){
                resolve(data)
            }
            else{
                reject(new Error("Lutfen String bir deger giriniz"))
            }
        },2000)
    })
}
*/
/*
getData(123).then(function(response){
    console.log("Value :" + response);
}).catch(function(err){
    console.error(err); // error yazarsak kirmizi bir sekilde yazilmis olacak 
})
*/
/*
// okunmasi daha kolay olan bir kod 
getData(24)
.then(resolve => console.log("Value : ") + resolve)
.catch(error => console.error(error))
*/


function addTwo(number) {
    return new Promise((resolve,reject) =>{
        if(typeof number === "number"){
            resolve(number + 2)
        }
        else{
            reject(new Error("Lutfen Bir sayi giriniz.."))
        }
    })
}

addTwo(10)
.then(response => {
    console.log(response)
    return response + 2 // returnlerle promise chain yapabiliriz
    // promisleri ard arda ekleyip calistirabiliriz promise chain yapabildighimiz icin yine than ile yakaladik
}).then(response2 => console.log(response2))
.catch(error => console.error(error))
// promislerde birden fazla catch kullanamiyoruz
// ama birden cok then kullanabiliriz
