const form = document.getElementById("film-form")
const titleElement =  document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1]
const clearFilms = document.getElementById('clear-film')
// UI


evenListeners();

// events

function evenListeners(){
    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage()
        UI.loadAllFilms(films)
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
        UI.displayMessages("Please fill in all fields","danger")
    }
    else{
        // new Film
        const newFilm = new Film(title,director,url)
        UI.addFilmToUI(newFilm); // arayuze film ekleme
        Storage.addFilmToStorage(newFilm)
        UI.displayMessages("Successfuly added.","success")
    }


    UI.clearInputs(titleElement,directorElement,urlElement);
}

// delete film 

function deleteFilm(e){
    
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target)
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessages("silme islemi basarilir","success")
    }
}

// clear all films

function clearAllFilm(){
    if(confirm("Are you sure? ")){
        UI.clearAllFilmsFromUI()
        Storage.clearAllFilmsFromStorage()
    }
}