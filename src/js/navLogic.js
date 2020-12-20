console.log('its working')

const nav = document.querySelector(".nav")
const navScrolled = document.querySelector(".nav-scrolled")
const pageWrapper = document.querySelector(".page-wrapper")
const navClicked = document.querySelector(".nav-clicked")
const navIconWrapper = document.querySelector(".nav__icon-wrapper")
const navIcon = document.querySelector(".nav__icon")
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
    navIcon.classList.add("nav__icon--active")
}

/** Storing display none in a variable so that we can freely add/remove it after transitionend */
const listener = () => {
    navClicked.style.display = "none";
    navClicked.removeEventListener('transitionend', listener);
};
  
const hideNavMenu = () => {
    navClicked.addEventListener('transitionend', listener);
    navClicked.style.opacity = 0;
    navIcon.classList.remove("nav__icon--active")
}

navIconWrapper.addEventListener('click', () => {
    // console.log("working!")
    
    if (navClicked.style.display == "none") {
        // navClicked.style.display = "flex";
        // navClicked.style.opacity = 1;
        // navIcon.classList.add("nav__icon--active")
        body.style.overflow = "hidden"
        // console.log(body)
        showNavMenu()
      } else {
        // navClicked.style.display = "none";
        // navClicked.style.opacity = 0;
        // navIcon.classList.remove("nav__icon--active")
        body.style.overflow = "visible"
        hideNavMenu()
      }
})