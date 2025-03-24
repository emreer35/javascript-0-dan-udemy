// Ajax,callback , http request
// ************************************************************************************
// GET islemi 
// ************************************************************************************
class Request{
    //icerisinde 4 tane functions olacak => get post put delete
    constructor(){
        this.xhr = new XMLHttpRequest()
    }
    // Get Request

    get(url,callback){

        this.xhr.open("GET",url)
        
        /*
        -- ilkel yontem -- 1. yontem
        const temp = this
        
        this.xhr.onload = function () {
            if(temp.xhr.status === 200){
                console.log(temp.xhr.responseText);
            }
            */
            /* -- hatali yontem
            console.log(this);
            burada this yazdigimiz zaman xhr i gosteriyor tekrardan xhr i almak
            istiyoruz hata veriyor 
            eger this requesti gosterseydi xhr i secerdik 
            
        this.xhr.onload = function() {
            if(this.xhr.status === 200){
                console.log(this.xhr.responseText);
            }
            
            
        }
        */
        /*
        // -- yapilabilecek yontem 2.yontem
        this.xhr.onload = function(){
            if (this.status === 200) {
                console.log(this.responseText);
            }
        }
        */
       /*
        // --- yapilabilecek yontem 3.yontem ----- 
        this.xhr.onload = function(){
            console.log(this); // request i gosteriyor 
            if(this.xhr.status === 200){
                console.log(this.xhr.responseText);
            }
        }.bind(this) bind fonksiyonu ile xhr i degil Request i gosteriyor
        */
        // -- yapilabilecek yontem 4.yontem arrow function ----
        
        this.xhr.onload = () => {
            // console.log(this);
            if(this.xhr.status === 200){
                // console.log(this.xhr.responseText);
                callback(null,this.xhr.responseText) // call back i burada kullandik 
                //       error kismina null yazdik 
            }
            // hata mesaji yazdirmamiz lazim 
            else {
                callback("Get Request : Bir Hata Olustu..",null);
                //          errora kismina string veri yazdik degerimize null yazdik 
            }
        }
        
        this.xhr.send()
    }
    // ************************************************************************************
    // POST islemi 
    // ************************************************************************************
    post(url,data,callback){
        this.xhr.open("POST",url) // post olarak cektik
        this.xhr.setRequestHeader("Content-type","application/json") // datamizi json olarak gonderecegiz
        // post requestimiz basarili bir sekilde gerceklesmisse onload a girecek
        this.xhr.onload = () => { // arrow function olarak yazdik bind a gerek kalmasin diye
            if(this.xhr.status === 201){
                // herhangi bir hatali durum yok 
                // basarili bir islem gerceklestirdik 
                callback(null,this.xhr.responseText)
            }
            else {
                callback("Post Request : Bir Hata Olustu..",null)
            }
        }
        // datamizi gondermemeiz gerekiyor string olarak 
        this.xhr.send(JSON.stringify(data))
    }
    // ************************************************************************************
    // PUT islemi 
    // ************************************************************************************

    put(url,data,callback){
        this.xhr.open("PUT",url)
        this.xhr.setRequestHeader("Content-type","applications/json")
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText)
            }
            else{
                callback("Put Request : Bir Hata Olustu..",null)
            }

        }
        this.xhr.send(JSON.stringify(data))
    }
    // ************************************************************************************
    // DELETE islemi 
    // ************************************************************************************

    delete(url,callback){
        this.xhr.open("DELETE",url)
        this.xhr.onload = ()=>{
            if(this.xhr.status === 200){
                callback(null,"Veri silme islemi basarili")
            }
            else{
                callback("Delete request : Bir Hata Olustu",null)
            }
        }
        this.xhr.send()
    }

}
const request = new Request() 
/*
const albums = request.get("https://jsonplaceholder.typicode.com/albums")
console.log(albums); // undefined cikti bunu burda almak istiyorsak callback 
// kullanmamiz lazim 
*/
/*
request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    //                                                            error ve deger olarak
    //                                                           2 parametre aldik 
    // console.log(response);
    // kontrol yaptirma zamanimiz geldi 
    if (err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
    
})
*/
/*
request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
    //                                                            error ve deger olarak
    //                                                           2 parametre aldik 
    // console.log(response);
    // kontrol yaptirma zamanimiz geldi 
    if (err === null){
        console.log(JSON.parse(response));
    }
    else{
        console.log(err);
    }
})
*/
/*
// url , data , callback 
request.post("https://jsonplaceholder.typicode.com/albums",{userId:11,title:"Thriller"},function(err,albums){
    if(err === null){
        console.log(JSON.parse(albums));
    }
    else{
        console.log(err);
    }
})
*/
/*
// url data callback 
request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:5,title:"Enrique Iglesias"},function(err,album){
    if (err === null){
        console.log(JSON.parse(album));
    }
    else{
        console.log(err);
    }
})
*/
request.delete("https://jsonplaceholder.typicode.com/albums/1",function(err,deletealbum){
    if(err === null){
        console.log(deletealbum);
    }
    else{
        console.log(err);
    }
})