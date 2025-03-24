function UI(){

    this.outputImage = document.getElementById("outputImage")
    this.outputLanguage = document.getElementById("outputLanguage")
    this.outputWord = document.getElementById("outputWord")

    // language

    this.language = document.getElementById("language")
}

UI.prototype.changeUI = function(){
    this.outputImage.src = `image/${this.language.value}.png`
    this.outputLanguage.innerHTML = this.language.options[this.language.selectedIndex].textContent
}
UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word 
}