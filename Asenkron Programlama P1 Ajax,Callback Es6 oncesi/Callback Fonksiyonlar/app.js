// callback functions 
// baska functionslara parametre olarak gonderiyoruz
/*
parametre 
 Parametre, bir fonksiyonda, fonksiyona girdi olarak sağlanan veri parçalarından
 birine atıfta bulunmak için kullanılan özel bir değişken türüdür
 */

//  const langs = ["java","Python","C++"]

//  langs.forEach(function(lang){
//     console.log(lang);
//  })

// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Tikla");
// })
/*
function process1(){
    
    setTimeout(function(){
        console.log("Process 1");
    },2000)
    
}
function process2(){
    setTimeout(function(){
        console.log("Process 2");
    },1500)
    
}
//asenkron bir sekilde calisacaklari icin process2 process1 den once calisir 
process1()
process2()
console.log("Naber"); // yukaridakilerin calismasini beklemeyecek asenkron calisiyor cunku 
*/


// callback kullanimi
// nerede kullanirim 
/*
bir function i bir yerden veri geldigi zaman calistirmak istiyorum o zaman ben bu fonskiyonu call back olarak
gonderirim
*/
/*
function process1(callback){
    setTimeout(function(){
        console.log("Process 1");
        callback()
    },2000)
}
function process2(){
    setTimeout(function(){
        console.log("Process 2");
    },1500)
}
process1(process2)

// async islemi sync isleme cevirdik 
// process1 i process2 den once calistirdi ardindan process2 yi calistrid 
*/

const langs = ["java","Python","C++"]
//callbacksiz 
/*
function addLang(lang){
    setTimeout(function(lang){
        langs.push(lang)
        console.log("Eklendi");
    },2000)
}
function getAllLangs(){
    setTimeout(function(){
        langs.forEach(lang => {
            console.log(lang);
        })
    },1000)
}
// javascript yazilmadi 
addLang("javascript") 
getAllLangs()
*/
function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang)
        console.log("Eklendi");
        callback()
    },2000)
}
function getAllLangs(){
    setTimeout(function(){
        langs.forEach(lang => {
            console.log(lang);
        })
    },1000)
}

addLang("javascript",getAllLangs) 



