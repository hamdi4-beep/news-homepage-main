const openBtn = document.querySelector('.nav-icon')
const closeBtn = document.querySelector('.close-menu')

const navItems = document.querySelector('.nav-items')
const body = document.body

openBtn?.addEventListener('pointerdown', (e: Event) => {
    navItems?.classList.remove('hidden')
    body.classList.add('overlay')
})

closeBtn?.addEventListener('pointerdown', (e: Event) => {
    navItems?.classList.add('hidden')
    body.classList.remove('overlay')
})