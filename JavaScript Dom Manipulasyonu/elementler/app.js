// elementi ID ye gore secme 

let element 

element = document.getElementById("todo-form")
element = document.getElementById("tasks-title")


// elementi CLASS  A secme

element = document.getElementsByClassName("list-group-item")

element = document.getElementsByClassName("list-group-item")[document.getElementsByClassName.length - 1]

element = document.getElementsByClassName("card-header")


// elementleri TAG a gore siralama

element = document.getElementsByTagName("div")

// Query Selector | CSS Selector | Tek bir elementi secer

element = document.querySelector("#todo-form")
element = document.querySelector("#tasks-title")

element = document.querySelector(".list-group-item")

element = document.querySelector("li")
element = document.querySelector("div")


// QuerySelectroAll - Tum elemenetleri secme

element = document.querySelectorAll(".list-group-item") // node list donuyor

element.forEach(function(el){
    console.log(el)
})





// console.log(element)
