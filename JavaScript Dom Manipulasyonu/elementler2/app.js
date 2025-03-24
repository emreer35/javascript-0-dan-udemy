const element = document.querySelector("#clear-todos");

// element ozellikleri

// console.log(element.id)
// console.log(element.className)
// console.log(element.classList)
// console.log(element.classList[0])
// console.log(element.textContent)
// console.log(element.innerHTML)
// console.log(element.href)
// console.log(element.style)

// Style ve element ozelliklerini degistirme

// element.className = "btn btn-primary" mavı
// element.className = "btn btn-danger" kırmızı
// element.className = "btn btn-success"  green
// element.className = "btn btn-warning" sari
// element.className = "btn btn-primary"
// element.style.color = "#000"
// element.style.marginLeft = "50px"
// element.href = "https://www.google.com.tr"
// element.target = "_blank"

// elementin icindeki yazialri degistirme  ***********

// element.textContent = "Delete"
// element.textContent = "<span>Delete</span>" bu halde span ler eklenmiyor
// element.innerHTML = "<span style ='color:green'>Delete</span>"

// const elements = document.querySelectorAll(".list-group-item") // node list
// elements.forEach(function(li){
//     li.style.color = "red"
//     li.style.background = "#eee"

// })

// nth child secimi

let element2 = document.querySelector("li:last-child")

element2 = document.querySelector("li:nth-child(1)")
element2 = document.querySelector("li:nth-child(2)")
element2 = document.querySelector("li:nth-child(3)")
element2 = document.querySelectorAll("li:nth-child(odd)")  //odd sadece tek sayilari secer
element2 = document.querySelectorAll("li:nth-child(even)") //even sadece cift sayialri secer


element2.forEach(function(el){
    el.style.background = "#ccc"
    el.style.color = "red"

})
console.log(element2)

// console.log(element)
