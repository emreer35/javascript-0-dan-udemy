// Yeni element olusturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>    


const newlink = document.createElement("a")
const carbody = document.getElementsByClassName("card-body")[1]

newlink.className = "btn btn-danger"
newlink.id = "clear-todos"
newlink.href = "https://www.google.com.tr"
newlink.target = "_blank"
newlink.appendChild(document.createTextNode("Baska bir sayfa icin tiklayin"))
carbody.appendChild(newlink)
/*
// Text Content

// carbody.textContent = "butun sayfa gitti" // bu cardbody yi sildi yerine sadece butun sayfa gitti yazdirdi 

// Text Node element gibi cocuk olarak eklenebiliyor

const text = document.createTextNode("Naber")
carbody.appendChild(text)
*/
console.log(carbody)

console.log(newlink)





