function getText() { // text dosyasindan verileri alma 
    /*
    fetch("example.txt").then(response =>{ // text dosyasini gosterdik bu dosyadan bilgimizi alacagiz bize bir promise donderecek olumlu sonucu then olumsuz sonucu catch ile alacagiz
        // console.log(response);
        return response.text() // text dosyasini aldik 
        // eger ki JSON dosyasindan alsaydik response.json diyecektik
    }).then(data => {
        console.log(data)
    })
    */
    // kisa yazimi bu sekilde 
    fetch("example.txt").then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
// getText()


function getJsonFile(){ // local bir json dosyasindan veri alma 
    fetch("example.json") // fetch requestimiz belirtmedigimiz surece get methodunu kullaniyor
    .then(response => response.json()).then(jsonFile => console.log(jsonFile)).catch(err => console.error(err))
}
// getJsonFile()

function getExternalApi(){
    fetch("https://api.exchangeratesapi.io/latest").then(response => response.json())
    .then(data => {
        console.log(data.rates.TRY);
    })
    .catch(err => console.error(err))
}
getExternalApi()