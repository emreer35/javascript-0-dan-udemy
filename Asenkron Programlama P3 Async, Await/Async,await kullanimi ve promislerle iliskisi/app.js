async function test(data){
    // basina async anahtar kelimsei gelince ne olur 
    // 1 fonskiyonun mutlaka promise donecegini soyluyor yani
    // return new Promise() yazmaktansa async yaziliyor
    // --return data 
    // async data yi resolve a koyuyor 
    // async direkt return datayi asagidakine ceviriyor 
    /*
    return new Promise((resolve,reject)=>{
        resolve(data)
    })
    */
    // await bir promisin resolve etmesini yani olumlu donus yapmasini bekleyen anahtar kelime

    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("isleminiz basariyla gerceklesti. bu bir degerdir.")
        },2000)

        
    })
    // resolve ile esitledigimiz degerimiz awaite gelecek 
    let response = await promise // burada 2 saniye 
    // console.log(response);
    // console.log("naber");
    //await sadece async fonskiyonlarin icerisinde calsiiyor

    return response
    
}
// test("merhaba").then(response => console.log(response))

// test("merhaba")

// test("merhaba").then(data => console.log(data))


async function getValue(data){
    // 1. return data
    // direkt buna donusuyor 
    /*
    return new Promise((resolve,reject)=>{
        resolve(data)
    }
     */
    // 2.    
    let promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("islem basariyla gerceklesti")
        },2000)    

        
        
    })

    let response = await promise
    // console.log(response);

    // console.log("naber");
    //3.
    return response 

    
}
// 1. getValue("yunus emre").then(response => console.log(response))
// 2.
// getValue("yunus emre")
// 3.
// getValue("yunus emre").then(data => console.log(data))
/*
async function test(data){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof data === "string"){
                resolve(data)
            }
            else{
                reject(new Error("lutfen string bir dger girin"));
            }
        },2000)
    })
    let response = await promise
    return response
}
test(123).then(data => console.log(data))
.catch(err => console.error(err))
*/

// async function fetch ile kullanimi 

async function getCurrency(url){
    const response = await fetch(url) // url den aldigimiz api yi response a atiyoruz

    const data = await response.json() // response in icerisinde ki json dosyasini grouyoruz
    
    return data // data yi donderiyoruz surekli asagida .then ile cagiriyoruz


}
getCurrency("https://jsonplaceholder.typicode.com/albums/1")
.then(response => console.log(response))


