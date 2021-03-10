console.log('its working')

const nav = document.querySelector(".nav")
const navScrolled = document.querySelector(".nav-scrolled")
const pageWrapper = document.querySelector(".page-wrapper")
const navClicked = document.querySelector(".nav-clicked")
const navIconWrapper = document.querySelector(".nav__icon-wrapper")
const navScrolledIconWrapper = document.querySelector(".nav-scrolled__icon-wrapper")
const navIcon = document.querySelector(".nav__icon")
const navScrolledIcon = document.querySelector(".nav-scrolled__icon")
const body = document.getElementsByTagName("body")[0]

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

const showNavMenu = () => {
    navClicked.style.display = "flex";
    /**
  * Force a browser re-paint so the browser will realize the
  * element is no longer `hidden` and allow transitions.
  */
    const reflow = navClicked.offsetHeight;
    navClicked.style.opacity = 1;
}

/** Storing display none in a variable so that we can freely add/remove it after transitionend */
const listener = () => {
    navClicked.style.display = "none";
    navClicked.removeEventListener('transitionend', listener);
};
  
const hideNavMenu = () => {
    navClicked.addEventListener('transitionend', listener);
    navClicked.style.opacity = 0;
}

navIconWrapper.addEventListener('click', () => {
    
    if (navClicked.style.display == "none") {
        body.style.overflow = "hidden"
        showNavMenu()
        navIcon.classList.add("nav__icon--active")

    } else {
        body.style.overflow = "visible"
        hideNavMenu()
        navIcon.classList.remove("nav__icon--active")

        if(navScrolledIcon.classList.contains("nav-scrolled__icon--active")){
            console.log("working!")
            navScrolled.style.zIndex = 6
            navScrolled.style.opacity = 1
            navScrolledIcon.classList.remove("nav-scrolled__icon--active")
        }
    }   
})

navScrolledIconWrapper.addEventListener('click', () => {
    // console.log("working!")
    
    if (navClicked.style.display == "none") {
        body.style.overflow = "hidden"
        showNavMenu()
        navScrolled.style.zIndex = 4
        navScrolled.style.opacity = 0
        nav.style.opacity = 1
        navIcon.classList.add("nav__icon--active")
        navScrolledIcon.classList.add("nav-scrolled__icon--active")

      } else {
        body.style.overflow = "visible"
        hideNavMenu()
        
      }
})