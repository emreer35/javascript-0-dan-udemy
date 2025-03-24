// scroll event on element or document

// window.addEventListener("scroll", function() {
//     console.log(window.scrollX + "px");
//     console.log(window.screenY + "px");
// })

// document


window.addEventListener('scroll',function(){
    // console.log("hello");
    console.log(this.window.scrollY + "px");
    // console.log(this.window.scrollX + "px");
})