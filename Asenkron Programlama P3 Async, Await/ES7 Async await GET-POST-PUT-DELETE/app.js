class Request{
    
    async get(url){
        const response = await fetch(url) // Response Object
        const data = await response.json() // Json object
        
        return data 
    }
    async post(url,data){
        const response = await fetch(url,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }) // Response Object
        const info = await response.json()
        return info

    }
    async put(url,data){
        const response = await fetch(url,{
            method:"PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-type':"application/json; charset=UTF-8"
            }
        })
        const info = await response.json()
        return info
    }
    async delete(url){
        const response = await fetch(url,{
            method:"DELETE"
        })
        // const info = await response.json() zaten verileri silinecegi icin 
        // return info // direkt donecek veriyi soyleyebiliriz
        return "Verileriniz basariyla silinmistir"

    }
}

const request = new Request()
/*
request.get("https://jsonplaceholder.typicode.com/albums").then((result) => {
    console.log(result);    
}).catch((err) => {
    console.error(err);
}); 
*/
/*
request.post("https://jsonplaceholder.typicode.com/posts",{
    userId:144,
    title:"Aydin in degisen ilceleri",
    body: "Efelerdeki cilgin koyunlar tum sehri istila etti"
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});
*/
/*
request.put("https://jsonplaceholder.typicode.com/posts/5",{
    userId:144,
    title:"Aydin in degisen ilceleri",
    body: "Efelerdeki cilgin koyunlar tum sehri istila etti"
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});
*/
//  bi ornegi boyle
/*
request.delete("https://jsonplaceholder.typicode.com/posts/5").then((result) => {
    console.log("Verileriniz basariyla silinmistir");
}).catch((err) => {
    console.error(err);
});*/
request.delete("https://jsonplaceholder.typicode.com/posts/5").then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});