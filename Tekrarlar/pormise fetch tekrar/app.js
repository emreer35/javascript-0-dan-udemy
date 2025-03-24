// reslove reject 

// function getData(data){
//     return new Promise(function(resolve,reject){
//         if(typeof data === 'string'){
//             resolve(data)
//         }
//         else{
//             reject('lutfen gecerli bir deger giriniz ')
//         }
//     })
// }

// // console.log(getData('yunus emre'))



// getData(2).then((result) => {
//     console.log(result);
    
// }).catch((err) => {
//     console.error(err);
    
// });


// function addTwo(number){
//     return new Promise((resolve,reject)=>{
//         if(typeof number === 'number'){
//             resolve(number + 2)
//         }else{
//             reject('lutfen gecerli bir sayi degeri giriniz')
//         }
//     })
// }


// addTwo(2).then((result) => {
//     console.log(result);
//     return result+2
    
// }).then(resolve2 => console.log(resolve2)
// )
// .catch((err) => {
//     console.error(reject);
    
// });

// function getText(){ // biz bir text dosyasindan bu sekilde veri cekebiliyoruz

//     fetch('example.txt').then(Response => {
//         return Response.text()
//     }).then(result => console.log(result)
//     )
//     .catch(err => console.error(err))
    
// }

// // getText()

// function getData(){
//     fetch('example.json').then((result) => {
//         return result.json()
//     }).then((emp)=>{
//         console.log(emp);
        
//     })
//     .catch((err) => {
//         console.error(err);
        
//     });
// }
// // getData()

// const url = 'https://jsonplaceholder.typicode.com/posts/1'
// function getExternal(url){
//     fetch(url).then((result) => {
//         return result.json()
//     }).then(data=> console.log(data.title)
//     )
//     .catch((err) => {
//         console.error(err);
        
//     });
// }
// getExternal(url)
class Request{
    // get(url){
    //     fetch(url).then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(err =>console.error(err))
    // }
    get(url){
        return new Promise((res,rej)=>{
            fetch(url).then((response)=>{
               return response.json()
            }).then(data => res(data))
            .catch(err => rej(err))
        })
    }
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
            }).then(response => response.json())
            .then(data => resolve(data)).catch(err => reject(err))
        })
    }

    
}

const request = new Request()
// request.get('https://jsonplaceholder.typicode.com/albums/1')

request.get('https://jsonplaceholder.typicode.com/posts')
.then((albums)=>{
    
    console.log(albums);
    
}).catch(err => console.log(err)
)

request.post('https://jsonplaceholder.typicode.com/posts',{
    'title':'instagram gondeirsi',
    'body':'bar',
    'userId': 1
}).then(response => console.log(response)
).catch(error => console.error(error)
)



