class UI {
  constructor() {
    this.profileDiv = document.getElementById("profile");
    this.reposDiv = document.getElementById("repos");
    this.lastUsers = document.getElementById("last-users");
    this.inputField = document.getElementById("githubname");
    this.body = document.querySelector(".card-body");
  }
  clearInput() {
    this.inputField.value = "";
  }
  showUserInfo(user) {
    this.profileDiv.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-4">
                    <a href="${user.html_url}" target = "_blank">
                    <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                    <hr>
                    <div id="fullName"><strong>${user.name}</strong></div>
                    <hr>
                    <div id="bio">${user.bio}</div>
                </div>
                <div class="col-md-8">
                    <button class="btn btn-secondary">
                            Takipçi  <span class="badge badge-light">${user.followers}</span>
                    </button>
                    <button class="btn btn-info">
                            Takip Edilen  <span class="badge badge-light">${user.following}</span>
                        </button>
                    <button class="btn btn-danger">
                        Repolar  <span class="badge badge-light">${user.public_repos}</span>
                    </button>
                    <hr>
                    <li class="list-group">
                        <li class="list-group-item borderzero">
                            <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                            
                        </li>
                        <li class="list-group-item borderzero">
                            <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                            
                        </li>
                        <li class="list-group-item borderzero">
                            <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                            
                    </li>
                        
                </div>
                        
                    
            </div>
        </div>
       `;
  }
  showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    this.body.appendChild(alert);
    setTimeout(function () {
      alert.remove();
    }, 1500);
  }
  showRepoInfo(repos) {
    this.reposDiv.textContent = ""
    repos.forEach(repo => {
        this.reposDiv.innerHTML +=`
        <div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                    <a href="${repo.html_url}" target = "_blank" id = "repoName" class="btn btn-primary">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                    Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>
                    <button class="btn btn-info">
                    Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                    </button>                    
                </div>
            </div>
            <hr>

        </div>
        `
    });
    
  }
  addSearchedUserToUI(username){
    //li class="list-group-item">asdaskdjkasjkşdjşasjd</li>

    let users = Storage.getSearchedUsersFromStorage()
    if(users.indexOf(username) === -1){
        const li = document.createElement("li")
        li.className = "list-group-item"
        const a = document.createElement("a")
        a.className = "search"
        a.textContent = username
        a.href = "#"
        li.appendChild(a)
        this.lastUsers.appendChild(li)
    }
    
  }
  clearAllSearchedFromUI(){
    while(this.lastUsers.firstElementChild !== null){
        // this.lastUsers.firstElementChild.remove() 
        this.lastUsers.removeChild(this.lastUsers.firstElementChild)
    }
  }

}
