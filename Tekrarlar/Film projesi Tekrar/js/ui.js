// UI constructor
function UI(){
}

UI.prototype.addFilmToUI = function (newFilm){
    /*
    <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
    </tr>
    */
   const filmList = document.getElementById("films")
   filmList.innerHTML +=`
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" style="height:100px;"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
    </tr>
   `
}
UI.prototype.clearInputs = function(title,director,url){
    title.value = ""
    director.value = ""
    url.value = ""
}

UI.prototype.displayMessages = function(messages,type){
    const cardBody = document.querySelector(".card-body")

    // alert div create
    const div = document.createElement("div")
    div.className = `alert alert-${type}`
    div.textContent = messages
    cardBody.appendChild(div)

    setTimeout(()=>{
        div.remove()
    },1500)
}

UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films")
    films.forEach(film => {
        filmList.innerHTML+= `
    <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail" style="height:100px;"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
    </tr>
   `
    });
}

UI.prototype.deleteFilmFromUI = function(target){
    target.parentElement.parentElement.remove()
}
UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("films")
    // yavas calisir
    // filmList.innerHTML = ""
    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove()
    }
}