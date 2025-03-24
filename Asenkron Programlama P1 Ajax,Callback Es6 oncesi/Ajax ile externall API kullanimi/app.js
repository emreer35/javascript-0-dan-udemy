document.getElementById("change").addEventListener("click",change)

function change(){
    const xhr = new XMLHttpRequest()

    xhr.open("GET","api linki ")

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText)
            // console.log(response.rates.TRY);
            const euro = Number(document.getElementById("amount").value)
            // console.log(typeof document.getElementById("amount").value); // string
            const tl = document.getElementById("tl").value = euro * response


            console.log(euro * response);
        }
    }


    xhr.send()


}