// Http Status
// 200 : OK
// 403 : Forbiden
// 404 : Not Found
// 505 : Internal Server Error

// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

const btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    const xhr = new XMLHttpRequest()

    console.log(xhr);
    // ***************************************************************************************
    /* onreadystatechange e function atamak eski bir yontem 
    // ***************************************************************************************
    // xhr.onreadystatechange = function(){
    //     // console.log(this.readyState); // burada window objesini degil
    //     // XMLHttpRequest dosyasini gosterecek 1,2,3,4
    //     // console.log(this.status); // 0 3x200
    //     if(this.readyState == 4 && this.status == 200){
    //         // response hazir
    //         console.log(this.responseText);
    //     }
    // }
    */
   /*
    // ***************************************************************************************
    // onprogress readystate 3 oldugunda calisir 
    // ***************************************************************************************
    xhr.onprogress = function(){
        console.log("Process Islenior",this.readyState);
    }
    */
    // ***************************************************************************************
    // ONLOAD islemi sadece response hazir oldugunda readystate in 4 oldugunda calisir
    // ***************************************************************************************

    xhr.onload = function(){
        // hata mesaji donmeyen statusu 200 olan bir sekilde dondurmek istiyoruz
        if(this.status === 200){ // zaten onload da readystate 4 bunu yazmamiza gerek yok
            // console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText

        }
        
        // console.log(this.responseText);
    }



    // GET,POST,PUT,DELETE
    xhr.open("GET","example.txt",true)
    // yukarida get yaptigimiz icin herhangi bir deger vermiyoruz
    xhr.send()
    // POST yapilsaydi server tarafina bir veri gondermemiz gerekirdi
    // xhr.send("asdadad")

})
