
// --- DOMContentLoaded ----
// sayfa tamamen yuklendigi zaman calisan fonksiyon
/*
document.addEventListener("DOMContentLoaded",load)

function load(e){
    console.log("sayfa yuklendi")
}
*/

const filter = document.getElementById("filter")

// ---- Focus ----

// filter.addEventListener("focus",run)

// ---- blur -----

// focustan cikinca blur eventi calisiyor

// filter.addEventListener("blur",run)

// ----- paste ------ 

// kopyalama islemini yaptiktan sonra ortaya cikan event

// filter.addEventListener("paste",run)

// ----- copy ------

// bir yazinin kopyalandiginda ortaya cikan event

// filter.addEventListener("copy",run)

// ----- cut ------

// bir yaziyi kestigimizde ortaya cikan event

// filter.addEventListener("cut",run)

// ----- select ------

// secme islemi bittikten sonra ortaya cikan event

filter.addEventListener("select",run)

function run(e){
    console.log(e.type)
}




