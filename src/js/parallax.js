let scrolling = false; 
let counter = 0;

// window.addEventListener('scroll', e => {
//     counter++
//     console.log(counter)
//     const target = Array.from(document.querySelectorAll('.scroll'))
//     // console.log(target)
//     let scrolled = window.pageYOffset
//     // var rate = scrolled * -0.5
    
//     target.forEach(elem => {
//         console.log(elem)
//         let pos = scrolled * elem.dataset.rate
//         elem.style.transform = "translate3d(0px," + pos + "px, 0px)"
//     })
// })




window.addEventListener('scroll', e => {
    console.log('this is working')
    scrolling = true
})

setInterval(() => {

    if (scrolling) {
        
        scrolling = false
        counter++
        console.log(counter)
        const target = Array.from(document.querySelectorAll('.scroll'))
        // console.log(target)
        let scrolled = window.pageYOffset
        // var rate = scrolled * -0.5
        
        target.forEach(elem => {
            console.log(elem)
            let pos = scrolled * elem.dataset.rate
            elem.style.transform = "translate3d(0px," + pos + "px, 0px)"
        })
    }
}, 15)