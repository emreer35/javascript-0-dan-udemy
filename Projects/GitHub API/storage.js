class Storage {

    static getSearchedUsersFromStorage(){
        // get users from storage 
        let users
        if(localStorage.getItem("searched") === null){
            users = []
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"))
        }
        return users
    }
    static addSearchedUsersToStorage(username){
        // add users
        // is there 
        let users = this.getSearchedUsersFromStorage()
        // storage.get de diyebilirdik ama this zaten burayi gosteriyor
        if(users.indexOf(username) === -1){
            users.push(username)
        }
        
        localStorage.setItem("searched",JSON.stringify(users))

    }
    static clearAllSearchedUsersFromStorage(){
        // clear all users
        localStorage.removeItem("searched")
    }
}