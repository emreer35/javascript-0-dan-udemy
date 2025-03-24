const video = document.querySelector(".video-container")
const switchBtn = document.querySelector(".switch-btn")

const preload = document.querySelector(".preloader")
window.addEventListener("load",function(){
    preload.classList.add("hide-preloader")
})

switchBtn.addEventListener("click",function(){
    switchBtn.classList.toggle("slide")
    if(switchBtn.classList.contains("slide")){
        video.pause()
    }
    else{
        video.play()
    }
})