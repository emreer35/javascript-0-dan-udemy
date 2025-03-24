class Request{
    async get(url){
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    async post(url,data){
        const response = await fetch(url,{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        const info = await response.json()
        return info
    }
    async put(url,data){
        const urldata = await fetch(url,{
            method:"PUT",
            body: JSON.stringify(data),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        const info = await urldata.json()
        return info
    }
    async delete(url){
        const dataUrl = await fetch(url,{
            method:"DELETE"
        }) 
        const data = "Bu veri basariyla silindi" 
        return data
    }
}
const request = new Request()

request.delete().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});