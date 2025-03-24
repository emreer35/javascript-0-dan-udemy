const todoInput = document.getElementById("todo")

let element


// different way to add the class
element = todoInput
element = todoInput.classList

// Add Class

// todoInput.classList.add("newClass")
// todoInput.classList.add("newClass2")
// todoInput.className = "newClass newClass2"

// // Delete Class

// todoInput.classList.remove("form-control")
// element = todoInput


element = todoInput.placeholder
element = todoInput.getAttribute("placeholder")

// Placeholder attribute unu degistirme 

todoInput.setAttribute("placeholder","Naber")
element = todoInput.placeholder

// farkli bir Attribute ekleme

todoInput.setAttribute("title","Input")
element = todoInput

// var olan attribute u silme

todoInput.removeAttribute("name")


// Attribute var mi yok mu kontrol eden islem

element = todoInput.hasAttribute("requried") // false
element = todoInput.hasAttribute("name") // true


element = todoInput



console.log(element)