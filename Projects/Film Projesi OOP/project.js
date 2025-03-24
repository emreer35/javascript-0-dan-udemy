// form
const form = document.getElementById("film-form")

// inputlar 
const titleElement = document.getElementById("title")
const directorElement = document.getElementById("director")
const urlElement = document.getElementById("url")

// button 

const clearFilm = document.querySelector("#clear-film")
const secondBody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-film")



// UI Objesini baslatma
const ui = new UI()

// Storage objesini baslatma
const storage = new Storage()

// Eventlerimizi yukleme
eventListener()
function eventListener(){
    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmFromStorage()
        ui.loadFilm(films)
        
    })
    secondBody.addEventListener("click",deleteFilm)
    clear.addEventListener("click",clearAllFilms)

}

function addFilm(e){
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if(title === "" || director === "" || url === ""){
        // hata
        ui.displayMessages("danger","Tum Alanlari Doldurunuz.")
    }
    else{
        // yeni film
        const newFilm = new Film(title,director,url) // filmleri js dosyasindan cekme 
        ui.addFilmToUI(newFilm) // arayuze film ekleme
        storage.addFilmFromStorage(newFilm)
        ui.displayMessages("success",`${title} Filmi basariyla eklendi.`)
        
    }
    ui.clearInput(titleElement,directorElement,urlElement)

    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e) 
        const tr = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        storage.deleteFilmFromStorage(e)
        ui.displayMessages("success",`${tr} basariyla silindi`)
    }
    
}
function clearAllFilms(){
    if(confirm("Tum Filmleri Silmek Istedigine Emin Misin?")){
        ui.clearAllFilmsFromUI()
        storage.clearAllFilmsFromStorage()
        ui.displayMessages("success","Tum Filmler Basariyla Silindi.")
    }    

}






