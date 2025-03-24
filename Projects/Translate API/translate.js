function Translate(word,language){
    this.apikey = "c7361cfcbbmshf7895422100cc41p164213jsn0c3b3da94ed7"
    this.word = word
    this.language = language

    // xhr object
    this.xhr = new XMLHttpRequest()   


}
Translate.prototype.translateWord = function(callback) { // arrow func ile olmaz this window objesi olacak ve bunun icerisinde arayamayacagiz

    // ajax islemleri
    // this.xhr.open("GET",'https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=tr')
    // this.xhr.onload = ()=> {
    //     if(this.xhr.status === 200){
    //         console.log(JSON.parse(this.xhr.responseText));
    //     }
    //     else{
    //         console.log("Hata");
    //     }
    // }
    // this.xhr.setRequestHeader("Accept-Endcoding",'application/gzip')
    // this.xhr.setRequestHeader('X-RapidAPI-Key', 'c7361cfcbbmshf7895422100cc41p164213jsn0c3b3da94ed7')
    // this.xhr.setRequestHeader('X-RapidAPI-Host', 'google-translate1.p.rapidapi.com')
    // this.xhr.send()
     
    this.xhr.open("GET","https://translate.yandex.net/api/v1.5/tr.json/translate/trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481")
    this.xhr.onload = ()=>{
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText)
            const text = json.text[0]
            callback(null,text)
        }
        else {
            callback(new Error("Hata"),null)
        }
    }
    this.xhr.send()
    
}
Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord
    this.language = newLanguage
}
