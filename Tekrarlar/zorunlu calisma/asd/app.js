/*
const form = document.getElementById("todo-form")
const todoInput = document.getElementById("todo")
const firstbody = document.querySelectorAll(".card-body")[0]
const secondbody = document.querySelectorAll(".card-body")[1]
const todoList = document.querySelector(".list-group")
const filter = document.getElementById("filter")
const clearButton = document.getElementById("clear-todos")

eventListeners()
function eventListeners(){
    form.addEventListener("submit",addTodo)
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI)
    secondbody.addEventListener("click",deleteTodo)
    filter.addEventListener("keyup",filterTodos)
    clearButton.addEventListener("click",clearAllTodos)

}

function addTodoToUI(newTodo) {
    
    /*<li class="list-group-item d-flex justify-content-between">
                        Todo 1
                        <a href="#" class="delete-item">
                            <i class="fa fa-remove"></i>
                        </a>

    </li> ---
    const listTodo = document.createElement("li")

    const link = document.createElement("a")
    link.className = "delete-item"
    link.href = "#"
    link.innerHTML = "<i class='fa fa-remove'></i>"

    listTodo.className = "list-group-item d-flex justify-content-between"
    
    listTodo.appendChild(document.createTextNode(newTodo))
    listTodo.appendChild(link)
    todoList.appendChild(listTodo)
    todoInput.value = ""
    
}
// todo ekleme 
function addTodo(e){
    const newTodo = todoInput.value.trim()
    const todos = getTodosFromStorage()
    let isThere = false 
    todos.forEach(function(todo){
        if(todo.indexOf(newTodo) != -1){
            isThere = true
        }
    })
    if(newTodo === ""){
        showAlert("danger","lutfen bir todo giriniz")
    }
    else if(isThere){
        showAlert("danger",`${newTodo} icinde mevcuttur`)
    }
    else{
        addTodoToUI(newTodo)
        addTodoToStorage(newTodo)
        
        showAlert("success",`${newTodo} Basarili bir sekilde eklendi` )
    }
    

    e.preventDefault()
    
}
function showAlert(type,message){
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`
    alert.textContent = message

    firstbody.appendChild(alert)

    todoInput.addEventListener("click",delClick)
    function delClick(){
        alert.remove()
    }
}
function getTodosFromStorage(){
    let todos
    if (localStorage.getItem("todos") === null){
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos
}
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage()

    todos.push(newTodo)

    localStorage.setItem("todos",JSON.stringify(todos))
}
function loadAllTodosToUI(){
    let todos = getTodosFromStorage()
    todos.forEach((todo) => {
        addTodoToUI(todo)
    });
}

function deleteTodo(e){
    const todoName = e.target.parentElement.parentElement.textContent
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove()
        deleteTodoFromStorage(todoName)
        showalertdelete("warning",`${todoName} basariyla silindi.`)
    }
    
}

function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage()
    todos.forEach((todo,index)=>{
        if(todo === deleteTodo){
            todos.splice(index,1)
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos))
}
function showalertdelete(type,message){
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`
    alert.textContent = message
    secondbody.appendChild(alert)
    window.setTimeout(()=>{
        alert.remove()
    },2000)
}
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase()
    const listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach((listItem) => {
        const text = listItem.textContent.toLowerCase()
        if(text.indexOf(filterValue)=== -1){
            listItem.setAttribute("style","display:none !important")
        }
        else{
            listItem.setAttribute("style","display:block")
        }
    })

}
function clearAllTodos(e){
    if(confirm("Tum Tasklari Silmek Istedigine Emin Misin")){
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild)
        }
        localStorage.removeItem("todos")
    }

}*/

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest()
    }
    get(url,callback){
        this.xhr.open("GET",url)
        this.xhr.onload = ()=>{
            if(this.xhr.status === 200){
                callback(null,JSON.parse(this.xhr.responseText));
            }
            else{
                callback("Isleminiz gerceklesmedi",null);
            }
        }
        this.xhr.send()
    }
}
const requests = new Request()
requests.get("https://jsonplaceholder.typicode.com/users2",function(err,response){
    if(err === null){
        console.log(response); // yanin daki null degerleri gormememk icin callbacka cevirdik yukaridaki hata kismini
    }
    else{
        console.log(err); // yanin daki null degerleri gormememk icin callbacka cevirdik yukaridaki hata kismini
    }
})

