"use strict";
const openBtn = document.querySelector('.nav-icon');
const closeBtn = document.querySelector('.close-menu');
const navItems = document.querySelector('.nav-items');
const body = document.body;
openBtn === null || openBtn === void 0 ? void 0 : openBtn.addEventListener('pointerdown', (e) => {
    navItems === null || navItems === void 0 ? void 0 : navItems.classList.remove('hidden');
    body.classList.add('overlay');
});
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('pointerdown', (e) => {
    navItems === null || navItems === void 0 ? void 0 : navItems.classList.add('hidden');
    body.classList.remove('overlay');
});
