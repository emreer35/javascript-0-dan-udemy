function Storage(){

}
Storage.prototype.addFilmFromStorage = function(newFilm){
    let films = this.getFilmFromStorage()
    films.push(newFilm)
    localStorage.setItem("films",JSON.stringify(films))

}
Storage.prototype.getFilmFromStorage = function(){
    let films
    if(localStorage.getItem("films")=== null){
        films = []
    }
    // isthere
    
    else {
        films = JSON.parse(localStorage.getItem("films"))
    }
    return films
}
// Storage.prototype.deleteFilmFromStorage = function(titleFilm){
//     let films = this.getFilmFromStorage()
//     films.forEach(function(film,index) {
//         if(film.title === titleFilm){
//             films.splice(index,1)
//         }
//     });
//     localStorage.setItem("films",JSON.stringify(films))

// }
Storage.prototype.deleteFilmFromStorage = function(e){
    const tr = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
    let films = this.getFilmFromStorage()
    films.forEach(function(film,index) {
        if(film.title === tr){
            films.splice(index,1)
        }
    });
    localStorage.setItem("films",JSON.stringify(films))

}
Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films")
}