function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){
    /*<tbody id="films">
        <tr>
            <td><img src="" class="img-fluid img-thumbnail"></td>
            <td></td>
            <td></td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        </tr>
    */
    const filmList = document.getElementById("films")
    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" style="width:200px; height:auto"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
    </tr>
    `
    
}
UI.prototype.clearInput = function(element1,element2,element3){
    element1.value = ""
    element2.value = ""
    element3.value = ""

}
UI.prototype.displayMessages = function(type,message){
    const firstBody = document.querySelector(".card-body")
    // Alert divini olustur
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`
    alert.textContent = message
    firstBody.appendChild(alert)

    setTimeout(() =>{
        alert.remove()
    },2000)
}
UI.prototype.loadFilm = function(films){
    let loadFilm = document.getElementById("films")
    films.forEach(film => {
        loadFilm.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail" style="width:200px; height:auto"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
    });
}
UI.prototype.deleteFilmFromUI = function(e){
    let tr = e.target.parentElement.parentElement
    tr.remove()
}

UI.prototype.clearAllFilmsFromUI = function(){
    const films = document.getElementById("films")
    
    while(films.firstElementChild !== null){
        films.removeChild(films.firstElementChild)
    }
    
}
   
