const openBtn = document.querySelector('.nav-icon')
const closeBtn = document.querySelector('.close-menu')

const navItems = document.querySelector('nav') as HTMLElement
const body = document.body

openBtn?.addEventListener('pointerdown', (e: Event) => {
    navItems.classList.add('show')
    body.classList.add('overlay')
})

closeBtn?.addEventListener('pointerdown', (e: Event) => {
    navItems.classList.remove('show')
    body.classList.remove('overlay')
})

console.log(navItems)