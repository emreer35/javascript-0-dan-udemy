// ELements

const githubForm = document.getElementById("github-form")
const nameInput = document.getElementById("githubname")
const clearLastUsers = document.getElementById("clear-last-users")
const findUser = document.querySelector(".search")
const lastUsers = document.getElementById("last-users")
const divUsers = document.getElementById("lastSearch")


// Github Object
const github = new Github()
// UI Object
const ui = new UI()
// Storage Object 
const storage = new Storage()

eventListener()

function eventListener(){

    githubForm.addEventListener("submit",getData)
    clearLastUsers.addEventListener("click",clearAllSearched)
    document.addEventListener("DOMContentLoaded",getAllSearched)
    divUsers.addEventListener("click",find)
}

function getData(e){
    let username = nameInput.value.trim()
    if(username === ""){
        alert("Please enter valid username.")
    }
    else{
        github.getGithubData(username)
        .then(response => {
            if (response.user.message === "Not Found"){
                // hata Mesaji
                ui.showAlert("danger","Please enter valid username")
            }
            else{
                ui.addSearchedUserToUI(username) // storage den once bunu cagir hata alirsin
                Storage.addSearchedUsersToStorage(username)
                ui.showUserInfo(response.user)
                ui.showRepoInfo(response.repo)
                
                
            }
        })
        .catch(err => ui.showAlert(err))
    }
    ui.clearInput()
    


    e.preventDefault()
}
function clearAllSearched(){
    // TUm arananlari temizle
    if(confirm("Do You Want Delete All Users")){
        Storage.clearAllSearchedUsersFromStorage()
        ui.clearAllSearchedFromUI()
        
    }

}
function getAllSearched(){
    // arananlari storagedan al ui a ekle
    let users = Storage.getSearchedUsersFromStorage()
    let result = ""
    users.forEach(user => {
        result += `<li class="list-group-item"><a href="#" class="search">${user}</a></li>`
    });
    lastUsers.innerHTML += result

}
function find(e){
    let aUser = e.target.className
    let username = e.target.textContent
    if(aUser === "search"){
        github.getGithubData(username)
        .then(response => {
            if (response.user.message === "Not Found"){
                // hata Mesaji
                ui.showAlert("danger","Please enter valid username")
            }
            else{
                ui.addSearchedUserToUI(username) // storage den once bunu cagir hata alirsin
                Storage.addSearchedUsersToStorage(username)
                ui.showUserInfo(response.user)
                ui.showRepoInfo(response.repo)
                
                
            }
        })
        .catch(err => ui.showAlert(err))
    }
}

