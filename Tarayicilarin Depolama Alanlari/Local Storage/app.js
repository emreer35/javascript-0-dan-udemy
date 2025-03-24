// local storage

// Set Item

// localStorage.setItem("hareket","burpee")
// localStorage.setItem("tekrar", 50)

// Get Item

// const value = localStorage.getItem("tekrar")
// console.log(value)
// console.log(typeof value)

// clear Local Storage

// localStorage.clear()

// localStorage.setItem("hareket","burpee")
// localStorage.setItem("tekrar", 50)

// local storage de var mi yok mu 

// console.log(localStorage.getItem("sport"))
/* asagidaki bulunamadi 
if (localStorage.getItem("sport") === null){
    console.log("Sorguladiginiz veri bulunamadi.")
}
else {
    console.log("Sorguladiginiz veri bulundu.")
}
*/
/*
if (localStorage.getItem("hareket")=== null){
    console.log("Sorguladiginiz veri bulunamadi.")
}
else {
    console.log("sorguladiginiz veri bulundu. ")
}
*/

// local storage - array yazma    JSON.stringify(todos)

// const todos = ["todo1","todo2","todo3"]
/*
// localStorage.setItem("todos",todos)

// console.log(localStorage.getItem("todos"))
// console.log(typeof localStorage.getItem("todos"))
boyle string bir deger oluyor array gibi yazilmiyor
*/
/*
// local storage a array gibi yazildi ama hala console da string
localStorage.setItem("todos", JSON.stringify(todos))
// const value = localStorage.getItem("todos")
*/
/*
// simdi console da da array gibi
const value = JSON.parse(localStorage.getItem("todos"))

console.log(value)
*/

const form = document.getElementById("todo-form")
const todoInput = document.getElementById("todo")

form.addEventListener("submit",addTodo)

function addTodo(e){

    const value = todoInput.value

    let todos

    if (localStorage.getItem("todos")=== null){
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(value)

    localStorage.setItem("todos",JSON.stringify(todos))


    e.preventDefault()
}







