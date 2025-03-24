/*
class Request {

    get(url){
        // suan verimizi sadece get fonskiyonu icinde kulnaiyoruz 
        fetch(url)
        // .then(response => response.text()) // text olarak aldik
        .then(response => response.json()) // json olarak aldik
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }
}
const request = new Request()
// disaridan verimizi alamaiyoruz
request.get("https://jsonplaceholder.typicode.com/albums")
*/

class Request {
    get(url){
        // verimizi promise ile disarida da kullanabiliyoruz
        return new Promise((resolve,reject) => {
            fetch(url).then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    post(url,data){
        
        // uzun yazimi boyle
        /*
        fetch(url,{
            method: "POST",
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
    })*/
        return new Promise((resolve,reject) =>{
            fetch(url,{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    // json gonderdigimiz icin type i json yaptik
                    "Content-type": "application/json; charset=UTF-8" // UTF 8 e uygun sekilde gonderecgimizi soyluyoruz
                }
            }).then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
        
    }

    put(url,data){
        return new Promise((resolve,reject) =>{
            fetch(url,{
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
        
    }
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"DELETE"
            }).then(response => resolve("Veri silme islemi basarilir"))
            .catch(err => reject(err))
        })
    }
}
// FETCH API da asenkron calisiyor ajax gibi 
const request = new Request()

// verimizi disaridan alabiliyoruz

// request.get("https://jsonplaceholder.typicode.com/albums")
// resolve daki data value su then  deki data 
/*.then(data => {
    // console.log(data)
    albums = data
    console.log(albums); // eger undefined bir sonuc olmasini istemiyorsak bunu then function in icerisinde yazdiriyoruz 
})
*/
// daha da kisaltmak adina 
// .then(albums =>{
    // console.log(albums);
// })
// reject deki err value si catch deki err
// .catch(err =>console.error(err))
// console.log(albums); // undefined deger dondu cunku asenkron bir sekilde calisti once bu calisti deger gelmeden bunu yazdirdi.
/*
request.post("https://jsonplaceholder.typicode.com/albums",{
    userId: 143,
    title: "Yunus Emre Er"
}).then(newAlbum => console.log(newAlbum))
.catch(error => console.error(error))
*/
/*
request.put("https://jsonplaceholder.typicode.com/albums/3",{
    userId:143,
    title:"Tarkan Yaranamadim"
}).then(albums => console.log(albums))
.catch(error => console.error(error))
*/
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.error(err))
