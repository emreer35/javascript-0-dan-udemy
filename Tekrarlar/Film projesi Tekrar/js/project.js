const form = document.getElementById("film-form")
const titleElement =  document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1]
const clearFilms = document.getElementById('clear-film')
// UI
const ui = new UI()
// storage
const storage = new Storage()

evenListeners();

// events

function evenListeners(){
    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage()
        ui.loadAllFilms(films)
    })
    cardBody.addEventListener("click",deleteFilm)
    clearFilms.addEventListener("click",clearAllFilm)
}

// add film

function addFilm(e){
    e.preventDefault()
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value
    
    if(title === "" || director=== "" || url === ""){
        // error
        ui.displayMessages("Please fill in all fields","danger")
    }
    else{
        // new Film
        const newFilm = new Film(title,director,url)
        ui.addFilmToUI(newFilm); // arayuze film ekleme
        storage.addFilmToStorage(newFilm)
        ui.displayMessages("Successfuly added.","success")
    }


    ui.clearInputs(titleElement,directorElement,urlElement);
}

// delete film 

function deleteFilm(e){
    
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessages("silme islemi basarilir","success")
    }
}

// clear all films

function clearAllFilm(){
    if(confirm("Are you sure? ")){
        ui.clearAllFilmsFromUI()
        storage.clearAllFilmsFromStorage()
    }
}