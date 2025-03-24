// tum elementleri secmme
const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const todoList = document.querySelector(".list-group")
const firstbody = document.querySelectorAll(".card-body")[0]
const secondbody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos") 

// tum event fonksiyonlar sayfa acilinca calisacak
eventListeners()

function eventListeners(){ // Tum event Listenerlar burada olacak biz buradan cagiracagiz
    form.addEventListener("submit",addTodo)
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI)
    secondbody.addEventListener("click",deleteTodo)
    filter.addEventListener("keyup",filterTodos)
    clearButton.addEventListener("click",clearAllTodos)
}
function clearAllTodos(e){
    if(confirm("Are you sure delete all tasks?")){
        // arayuzden todolari silecegim 
        
        // todoList.innerHTML = ""  // bu yavas buyuk pojelerde kullanilmaz
        /*
        todoList.removeChild(todoList.firstElementChild)
        todoList.removeChild(todoList.firstElementChild)
        todoList.removeChild(todoList.firstElementChild)
        todoList.removeChild(todoList.firstElementChild)
        console.log(todoList.firstElementChild)
        null bir deger dondu
        */
       // bunu while dongusuyle yapabilriiz cok daha hizli bir sekilde siliyor
       while(todoList.firstElementChild != null){
        todoList.removeChild(todoList.firstElementChild)
       }
       localStorage.removeItem("todos")


    }
}

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase()
    const listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach(function(listItem) {
        const text = listItem.textContent.toLowerCase()
        if (text.indexOf(filterValue) === -1){
            // bulamadi
            listItem.setAttribute("style","display : none !important")
        }
        else {
            listItem.setAttribute("style","display : block")
        }

    })

    // console.log(e.target.value)
    
}
function deleteTodo(e){
    const todoName =  e.target.parentElement.parentElement.textContent
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove()
        deleteTodoFromStorage(todoName) // sildigimiz zaman ... isim function i devreye sokma
        showalertdelete("warning",`${todoName} successfully deleted.`)
    }
    
}

function deleteTodoFromStorage(deletetodo){ // **************************** onemli

    let todos = getTodosFromStorage() // verileri aldik 
    todos.forEach(function(todo,index){  // tum arraylarin uzerinde gezindik
        if (todo === deletetodo){ 
            todos.splice(index,1) // arraydan degerimizi silebiliriz.
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos)) // local storage i guncelledik 
    
}

function loadAllTodosToUI(){ // tekrardan UI de gosterme yenilendiginde 
    let todos = getTodosFromStorage() // todolari cekiyoruz

    todos.forEach(function(todo){  // todos un uzerinde geziniyoruz 
        addTodoToUI(todo)
    })
    // todos.forEach(todo => {
    //     addTodoToUI(todo)
    // });
}

function addTodo(e){
    // trim() fonksiyonu bosluklari silememize yardimci olur .          emre         . noktalar ve emre arasidnaki bosluklar silinir
    const newTodo = todoInput.value.trim() 

    const todos = getTodosFromStorage() // todolari cektik 
    let isthere = false // var mi yok mu diye soruyoruz.
    todos.forEach(function(todo){
        if (todo.indexOf(newTodo) != -1){
            isthere = true
        }
    })


    if(newTodo === ""){
       /* <div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div> */
        showAlert("danger","Please enter the Todo.")
    }
    else if (isthere){
        showAlert("danger",`${newTodo} is in todos`)
    }
    else{
        addTodoToUI(newTodo)
        addTodoToStorage(newTodo)
        showAlert("success",`${newTodo} successfully added.`)
        
    }
    
    e.preventDefault()
}
function getTodosFromStorage(){ // storage dan todolari almamizi saglayacak 
    let todos
    if(localStorage.getItem("todos")=== null){
        todos = []
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos // tekrarlanacagi icin return todos 
}
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage()

    todos.push(newTodo) // yeni todo ekleme locale

    localStorage.setItem("todos",JSON.stringify(todos)) // locale ekledigimizi arraya seklinde yukleme
    
    
}
function showAlert(type,message){ // hata mesaji gonderme 
    const alert = document.createElement("div") // hata mesaji icin element olusturma 
    alert.className = `alert alert-${type} ` 
    alert.textContent = message
    
    firstbody.appendChild(alert) 

    // setTimeout 2 deger aliyor bir function bir de ne kadar sure calisacak

    // window.setTimeout(function(){
    //     alert.remove()
    // },1500)
    todoInput.addEventListener("click",delclick) 
        function delclick(e){
            alert.remove()
            
        }
}

function showalertdelete(type,message){
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`
    alert.textContent = message

    firstbody.appendChild(alert)

    setTimeout(function(){
        alert.remove()
    },1500)

}


function addTodoToUI(newTodo){ // yuakrida almis oldugu string degerini list item olarak UI ya ekleme 
    /* 
    <li class="list-group-item d-flex justify-content-between">
                        Todo 1
                        <a href="#" class="delete-item">
                            <i class="fa fa-remove"></i>
                        </a>

    </li> */
    // list item olusturma
    const listItem = document.createElement("li")

    // link olusturma
    const link = document.createElement("a")
    link.href = "#"
    link.className = "delete-item"
    link.innerHTML = "<i class='fa fa-remove'></i>"
    // listitem a attribute ekleme
    listItem.className = "list-group-item d-flex justify-content-between"

    // text node ekleme todo1 yazisinin yerine yazilani ekleme

    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(link)
    
    // TodoList e list item i ekleme

    todoList.appendChild(listItem)
    todoInput.value = ""
}
