const sidebarToggle = document.querySelector(".sidebar-toggle")
const sidebar = document.querySelector(".sidebar")
const closeBar = document.querySelector(".close-btn")

sidebarToggle.addEventListener("click",function(){
    // console.log(sidebar.classList.contains("sidebar"));
    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar")
    // }
    // else{
    //     sidebar.classList.add("show-sidebar")
    // }
    sidebar.classList.toggle("show-sidebar")
})
closeBar.addEventListener("click",()=>{
    sidebar.classList.toggle("show-sidebar")
})
