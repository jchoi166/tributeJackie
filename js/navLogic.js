console.log('its working')

const nav = document.querySelector(".nav")
const navScrolled = document.querySelector(".nav-scrolled")
const sectionOne = document.querySelector(".test")

const sectionOneOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -80% 0px'
}

const sectionOneObserver = new IntersectionObserver (function(entries, sectionOneObserver) {   
    console.log(entries[0].isIntersecting) 
    if (window.innerWidth <= 850){
        console.log ('returned')
        return
    } 
    if (entries[0].isIntersecting) {
        navScrolled.style.transform = "translateY(0%)"
        nav.style.opacity = 0
        navScrolled.style.opacity = 1
    } else {
        nav.style.opacity = ''
        navScrolled.style.transform = ""
        navScrolled.style.opacity = ''

    }

}, sectionOneOptions);

sectionOneObserver.observe(sectionOne)
