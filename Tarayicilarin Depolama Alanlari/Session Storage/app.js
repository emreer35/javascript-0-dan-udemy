// buttons 

const add = document.querySelector("#add")
const del = document.querySelector("#delete")
const clear = document.querySelector("#clear")

// inputlar

const addkey = document.querySelector("#addkey")
const addvalue = document.querySelector("#addvalue")
const deletekey = document.querySelector("#deletekey")

add.addEventListener("click",addItem)
del.addEventListener("click",deleteITem)
clear.addEventListener("click",clearItems)

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value)
}
function deleteITem(e){
    sessionStorage.removeItem(deletekey.value)
}
function clearItems(e){
    sessionStorage.clear()
}


