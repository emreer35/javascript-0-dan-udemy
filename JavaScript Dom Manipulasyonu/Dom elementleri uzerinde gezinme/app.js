let value

const TodoList = document.querySelector(".list-group")
const todo = document.querySelector(".list-group-item:nth-child(2)")
const cardrow = document.querySelector(".card.row")

value = TodoList
value = todo
value = cardrow

// Child Nodes - Text dahil aliyor  node

value = TodoList.childNodes
value = TodoList.childNodes[0] // text var

// Children element

value = TodoList.children // html collection seklinde veriyor
value = TodoList.children[0]
value = TodoList.children[TodoList.children.length - 1]
value = TodoList.children[2].textContent = "Degisti"


value = cardrow
value = cardrow.children
value = cardrow.children[2].children[1].textContent = "Burasida Degisti"


value = TodoList
value = TodoList.firstElementChild
value = TodoList.lastElementChild
value = TodoList.children.length // bunun bir diger yontemi hemen asagidaki 
value = TodoList.childElementCount // kac tane child i var gorebiliyoruz todolist in

// parent element 

value = cardrow
value = cardrow.parentElement
value = cardrow.parentElement.parentElement

// element kardesleri (ebeveynleri ortak olan elemmentler)

value = todo
value = todo.previousElementSibling // onceki child 
value = todo.nextElementSibling // sonraki kardes
value = todo.nextElementSibling.nextElementSibling // bi oncekinden sonraki kardes 

value = todo.previousElementSibling .previousElementSibling// null  baska child i yok 


console.log(value)

