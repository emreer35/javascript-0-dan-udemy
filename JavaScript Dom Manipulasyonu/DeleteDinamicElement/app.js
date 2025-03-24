// Dinamik Element Silme

const todoList = document.querySelector("ul.list-group")
const todo = document.querySelectorAll("li.list-group-item")

// REMOVE metodu


// todo[0].remove()
// todo[2].remove()

// REMOVE Child Metodu

todoList.removeChild(todoList.lastElementChild) // todolistin son elementini sildi
todoList.removeChild(todo[2]) // yukaridakinin ayni islmei benzeri 

console.log(todoList)
console.log(todo)