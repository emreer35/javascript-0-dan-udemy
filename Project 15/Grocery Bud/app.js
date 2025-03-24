// select items
const form = document.querySelector(".grocery-form")
const alert = document.querySelector(".alert")
const grocery = document.getElementById("grocery")
const list = document.querySelector(".grocery-list")
const container = document.querySelector(".grocery-container")
const submitBtn = document.querySelector(".submit-btn")
const clearBtn = document.querySelector(".clear-btn")


// edit option
let editElement;
let editFlag = false;
let editID = "";

// eventListeners
eventListener()
function eventListener(){
    // submit form
    form.addEventListener("submit",addItem)
    // clear all items
    clearBtn.addEventListener("click",clearAllItems)
    // load items 
    window.addEventListener("DOMContentLoaded",setupItems)

}


// functions
function addItem(e){
    e.preventDefault()
    const value = grocery.value.trim()
    const id = new Date().getTime().toString()
    if (value && !editFlag){

        createListItem(id,value)
        // display alert
        displayAlert("item added to the list", "success")
        // show container
        container.classList.add("show-container")
        // add to local storage
        addToLocalStorage(id,value)
        // set back to default
        setBackToDefault()


        // displayAlert("Item Added To The List", "success")
    }
    else if (value && editFlag){
        editElement.innerHTML = value
        displayAlert("value changed","success")
        // edit local Storage
        editLocalStorage(editID,value)
        setBackToDefault()
    }
    else {
        displayAlert("empty value","danger")
    }

}
// display alert
function displayAlert(message,type){
    alert.textContent = message
    alert.classList.add(`alert-${type}`)

    setTimeout(function(){
        alert.textContent = ""
        alert.classList.remove(`alert-${type}`)
    },1500)
}
function clearAllItems(){
    const items = document.querySelectorAll(".grocery-item")
    if (items.length > 0){
        items.forEach((item)=>{
            list.removeChild(item)
        })
    }
    container.classList.remove("show-container")
    displayAlert("empty list","danger")
    setBackToDefault()
    localStorage.removeItem("list")
}
// delete function
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    list.removeChild(element)
    
    if (list.children.length === 0){
        container.classList.remove("show-container")
    }
    displayAlert("item removed","danger")
    setBackToDefault()
    // remove from local storage
    removeFromLocalStorage(id)

}

// edit function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling
    // set form value
    grocery.value = editElement.innerHTML
    editFlag = true
    editID = element.dataset.id
    submitBtn.textContent = "edit"
    
}

// set back to default
function setBackToDefault(){
    grocery.value = ""
    editFlag = false
    editID = ""
    submitBtn.textContent = "submit"
}

// local storage
function addToLocalStorage(id,value){
    const grocery = {
        id,
        value 
    }
    let items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem("list", JSON.stringify(items))
}
function removeFromLocalStorage(id){
    let items = getLocalStorage()
    items = items.filter(item => {
        if(item.id !== id){
            return item
        }
    })
    localStorage.setItem("list", JSON.stringify(items))
}
function editLocalStorage(id,value){
    let items = getLocalStorage()
    items = items.map(item => {
        if(item.id === id){
            item.value = value
        }
        return item
    })
    localStorage.setItem("list", JSON.stringify(items))
}
function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem("list")) : []
}
// setup items
function setupItems(){
    let items = getLocalStorage()
    if(items.length > 0){
        items.forEach(item => {
            createListItem(item.id,item.value)
        })
        container.classList.add("show-container")
    }
}

function createListItem(id,value){
    const element = document.createElement("article")
    // add class
    element.classList.add("grocery-item")
    // add id
    const attr = document.createAttribute("data-id")
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button class="edit-btn" type="button"><i class="fas fa-edit"></i></button>
        <button class="delete-btn" type="button"><i class="fas fa-trash"></i></button>
    </div>`
    // delete and edit
    const deleteBtn = element.querySelector(".delete-btn")
    const editBtn = element.querySelector(".edit-btn")
    deleteBtn.addEventListener("click",deleteItem)
    editBtn.addEventListener("click",editItem)
    // appendchild
    list.appendChild(element)
}

// local sotrage api
// set item

// get item
// remove item
// save as string 
// const oranges = JSON.parse(localStorage.getItem("orange"))
// console.log(oranges);
// localStorage.removeItem('orange')
// localStorage.removeItem("oragne")

