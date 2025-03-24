const cardbody = document.querySelectorAll(".card-body")[1]

const title = document.querySelector("#tasks-title")

// -----  Click Eventi ----

/*
title.addEventListener("click",run)
function run(e){
    console.log(e.type)
}
*/

// ----  double click eventi dblclick  -----

/*
title.addEventListener("dblclick",run)

function run(e){
    console.log(e.type)
}
*/

// ---- Mouse Down -----

// keydown a benzer
// bunun yerine click de kullanilabilir
/*
title.addEventListener("mousedown",run)
function run(e){
    console.log(e.type)
}
*/

// ----- Mouse Up ------

// biraktigimiz an calisiyor
/*
title.addEventListener("mouseup",run)

function run(e){
    console.log(e.type)
}
*/

// ----- Mouse Over ------

// o eleemntin uzerine geldigimiz zaman calisan fonskiyon
// cardboy ye girdim mouse over olud icerisinde farkli bir elemente girdim yine mouse over oldu
/*
title.addEventListener("mouseover",run)
function run(e){
    console.log(e.type)
}
*/

// ------ Mouse Out -----

// o elemenetten ciktigimiz an calisir
// cardboy ye girdim mouse out olud icerisinde farkli bir elemente girdim yine mouse out oldu
/*
title.addEventListener("mouseout",run)

function run(e){
    console.log(e.type)
}
*/
/*
hem body de hem elementte calisiyor
cardbody.addEventListener("mouseover",run)
cardbody.addEventListener("mouseout",run)
function run(e){
    console.log(e.type)
}
*/

// ----- Mouse Enter ve Mouse Leave -----

// mouse enter sadece tabloya girerken ve cikarken calisiyor elementlerde calismiyor

cardbody.addEventListener("mouseenter",run)
cardbody.addEventListener("mouseleave",run)

function run(e){
    console.log(e.type)
}


