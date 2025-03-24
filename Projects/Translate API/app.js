// prototype , ajax callback


eventListener()

function eventListener(){
    document.getElementById("translate-form").addEventListener("submit",translateWord)

    //normalde change ile ama browswerlar tam olarak desteklemiyor
    document.getElementById("language").onchange = function(){
         // arayuz islmeleri
        ui.changeUI()
    }
}
//word 
const word = document.getElementById("word").value

// language 
const language = document.getElementById("language").value
const translate = new Translate(word,language)
const ui = new UI()
function translateWord(e){

    translate.changeParameters(word,language)
    translate.translateWord(function(err,data){
        // if(err === null){
        //     console.log(data);
        // }
        // else {
        //     console.error(err);
        // }
        if(err){ // err true gelidig surece err yazdiracak
            console.error(err);
        }
        else{
            ui.displayTranslate(response)
        }
    })
    
    e.preventDefault()
}