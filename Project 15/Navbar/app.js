// classlist show gets all classes
// contains - checks classlist for specifics class
// add -add class 
// remove - remove class
// toggle - toggles class

const navlinks = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navlinks.addEventListener("click",()=>{
    // console.log(links.classList.contains("links"));
    // console.log(links.classList.contains("show-links"));
    /*
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }
    else{
        links.classList.add("show-links")
    }
    */
    links.classList.toggle("show-links")
})