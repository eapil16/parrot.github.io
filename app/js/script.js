'use strict';
document.addEventListener('DOMContentLoaded', () => {
    
	const menu = document.querySelector('.menu-toggle-cont'),
		fixedMenu = document.querySelector('.fixed-menu');
	let i = 0;

	menu.addEventListener('click', ()=> {
		menu.classList.toggle('menu-toggle-cont_active');
		fixedMenu.classList.toggle('show');
	});

});