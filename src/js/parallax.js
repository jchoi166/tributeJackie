let scrolling = false; 


const parallaxScroll = () => {
    if (scrolling) {
        
        scrolling = false
        const target = Array.from(document.querySelectorAll('.scroll'))
        let scrolled = window.pageYOffset
        let pos = ""

        target.forEach(elem => {
            if (window.innerWidth > 900){
                pos = scrolled * elem.dataset.rate
            } else {
                pos = scrolled * -.1
            }
            elem.style.transform = "translate3d(0px," + pos + "px, 0px)"
        })
    } 
}

window.addEventListener('scroll', e => {
    scrolling = true
})

setInterval(() => {
    parallaxScroll()
    
}, 15)