// async function get(url){
//     const response = await fetch(url)

//     const data = await response.json()
//     return data
// }
// get('https://jsonplaceholder.typicode.com/posts')
// .then(response => console.log(response)
// ).catch(err => console.log(err)
// )

class Request {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const obje = await response.json()
    return obje
  }
}

const request = new Request();

// request
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
request.post('https://jsonplaceholder.typicode.com/posts',{
    'title':'instagram gondeirsi',
    'body':'bar',
    'userId': 1
}).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.error(err);
    
});