"use strict";
const openBtn = document.querySelector('.nav-icon');
const closeBtn = document.querySelector('.close-menu');
const navItems = document.querySelector('nav');
const body = document.body;
openBtn === null || openBtn === void 0 ? void 0 : openBtn.addEventListener('pointerdown', (e) => {
    navItems.classList.add('show');
    body.classList.add('overlay');
});
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('pointerdown', (e) => {
    navItems.classList.remove('show');
    body.classList.remove('overlay');
});
console.log(navItems);
