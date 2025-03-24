const modalOverlay = document.querySelector(".modal-overlay")

document.querySelector(".modal-btn").addEventListener("click",function(){
    // console.log(modalOverlay.classList);
    if(modalOverlay.classList.value === "modal-overlay"){
        modalOverlay.classList.add("open-modal")
    }
})
document.querySelector(".close-btn").addEventListener("click",function(){
    modalOverlay.classList.remove("open-modal")
})