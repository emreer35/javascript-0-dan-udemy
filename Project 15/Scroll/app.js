// set date
// select date span id
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

// close links 

const toggleBtn = document.querySelector(".nav-toggle")
const linkContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")
toggleBtn.addEventListener("click", function(){
    // linkContainer.classList.toggle("show-links")
    // bunu boyle yaparsak ul li mize deger eklersek gozukmeyecek ya da silersek hos bir goruntu olmayacak
    // o yuzden bunu kullaniyoruz
    // element.getboundClientRect()
    const containerHeight = linkContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    // console.log(containerHeight);
    // console.log(linksHeight);
    if(containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`
        // bunu yaparsan link container in height ini css de auto important yap cunku kotu gozukur
    }
    else {
        linkContainer.style.height = 0
    }
})

// fixed navbar
const navbar = document.getElementById("nav")
const topLink = document.querySelector(".top-link")
window.document.addEventListener("scroll",function(){
    const scrollHeight = window.scrollY;
    const navbarHeight = navbar.getBoundingClientRect().height
    // console.log(scrollHeight);
    if (navbarHeight < scrollHeight){
        navbar.classList.add("fixed-nav")
    }
    else {
        navbar.classList.remove("fixed-nav")
    }
    if(scrollHeight>500){
        topLink.classList.add("show-link")
    }
    else {
        topLink.classList.remove("show-link")
    }
})
// smooth color 
const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach((link)=> {
    link.addEventListener("click",function(e){
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        const navbarHeight = navbar.getBoundingClientRect().height
        const containerHeight = linkContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains("fixed-nav")
        
        // console.log(navbarHeight);
        let position = element.offsetTop - navbarHeight
        if(!fixedNav) {
            position = position - navbarHeight
        }
        if(navbarHeight > 82){
            position = position + containerHeight
        }

        window.scrollTo({
            left:0,
            top: position
        })
        linkContainer.style.height = 0
    })
})