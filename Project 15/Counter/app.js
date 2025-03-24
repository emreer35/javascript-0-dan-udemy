let count = 0 
// value 
const value = document.getElementById("value")

// buttons 
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener("click",function(e){
        const list = e.currentTarget.classList
        // console.log(list);
        if(list.contains("decrease")){
            count--
            
        }
        else if (list.contains("reset")){
            count = 0 
        }
        else if (list.contains("increase")){
            count++
        }
        value.textContent = count
    })
})

