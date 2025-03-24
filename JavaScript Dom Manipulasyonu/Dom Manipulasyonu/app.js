// ======== DOCUMENT OBJE ==========


// window object


let value

// console.log(this.document)
//console.log(document)

value = document
value = document.all
value = document.all.length
value = document.all[0]
value = document.all[6]
value = document.all[document.all.length - 1]


const elements = document.all // html collection
// for(let i = 0; i < elements.length ; i++){
//     console.log(elements[i])
// }
// html collection i for dongusu disinda kullanamiyoruz

// elements.forEach(function(element)) {
//     console.log(element)
// });


// Array.from(document.all) arraya cevir
// const collections = Array.from(document.all)
// collections.forEach(function(collection){
//     console.log(collection)
// })

value = document.all[7]// body 
value = document.body
value = document.head

value = document.location
value = document.location.hostname
value = document.location.port


value = document.URL

value = document.characterSet

// part 2

value = document

// Scriptler

value = document.scripts

value = document.scripts.length
value = document.scripts[1]

// links 

value = document.links

value = document.links[0]

value = document.links[document.links.length - 1]

value = document.links[document.links.length - 1].getAttribute("class")

value = document.links[document.links.length - 1].getAttribute("href")

value = document.links[document.links.length - 1].className // .getattribute("class")

value = document.links[document.links.length - 1].classList // claslari listeler

// forms

value = document.forms

value = document.forms.length

value = document.forms[0]

value = document.forms["form"] //  [0 yerine isim]

value = document.forms[0].id
value = document.forms[0].getAttribute("id")
value = document.forms[0].name
value = document.forms[0].getAttribute("name")

value = document.forms[0].method // default get degistrik post oldu 

 

value = document.links





console.log(value)