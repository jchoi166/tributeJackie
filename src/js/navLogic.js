console.log('its working')

const nav = document.querySelector(".nav")
const navScrolled = document.querySelector(".nav-scrolled")
const pageWrapper = document.querySelector(".page-wrapper")



const pageWrapperOptions = {
    root: null,
    threshold: 0,
    rootMargin: `0px 0px -87% 0px`
}

console.log(pageWrapperOptions)
const pageWrapperObserver = new IntersectionObserver (function(entries, pageWrapperObserver) {   

    if (entries[0].isIntersecting) {
        navScrolled.style.transform = "translateY(0%)"
        nav.style.opacity = 0
        navScrolled.style.opacity = 1
    } else {
        nav.style.opacity = ''
        navScrolled.style.transform = ""
        navScrolled.style.opacity = ''

    }

}, pageWrapperOptions);

pageWrapperObserver.observe(pageWrapper)

