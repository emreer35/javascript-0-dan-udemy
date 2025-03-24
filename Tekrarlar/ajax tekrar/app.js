// document.querySelector('.btn').addEventListener('click',function(){


//     const xhr = new XMLHttpRequest();

//     xhr.open('get','example.txt',true)

//     // xhr.onreadystatechange = function(){
//     //     if(xhr.readyState === 4 && xhr.status===200){
//     //         console.log(this.responseText);  
//     //     }
//     // }

//     xhr.onload = function(){
//         if(xhr.status === 200){
//             // console.log(this.responseText);
//             document.querySelector('.data').textContent = this.responseText
            
//         }
        
//     }


//     //post verisi yapsakydik icerisine deger gonderecktik
//     xhr.send()

// })

// document.getElementById('ajax').addEventListener('click',function(){

//     const xhr = new XMLHttpRequest()

//     xhr.open('get','employees.json',true)

//     xhr.onload = function(){
//         let list = document.getElementById('employees')
//         if(xhr.status === 200){
//             const employees = JSON.parse(this.responseText)
//             employees.forEach(element => {
//                 list.innerHTML+= `
//                     <tr>
                        
//                         <td>${element.name}</td>
//                         <td>${element.department}</td>
//                         <td>${element.salary}</td>
                    
//                     </tr>
//                 `
//             });
            
//         }
//     }

//     xhr.send()
// })

document.getElementById('change').addEventListener('click',change)

function change(){

    const xhr = new XMLHttpRequest

    xhr.open('get','link')

    xhr.onload = function (){
        if(xhr.status===200){
            const response = JSON.parse(this.responseText)
            const rate = response.rates.TRY
            const amount = Number(document.getElementById('amount').value)
            
            const result = rate * amount

        }
    }
}