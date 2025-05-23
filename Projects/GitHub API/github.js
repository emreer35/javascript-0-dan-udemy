class Github{
    constructor(url){
        this.url = "https://api.github.com/users/"
    }
    // get method with async await 
    async getGithubData(username){
        const responseUser = await fetch(this.url + username)
        const responseRepo = await fetch(this.url + username + "/repos")
        const userData = await responseUser.json()
        const repoData = await responseRepo.json()

        return {
            user:userData,
            repo:repoData
        }
    }
}