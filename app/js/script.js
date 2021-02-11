'use strict';
document.addEventListener('DOMContentLoaded', () => {
    
	const menu = document.querySelector('.menu-toggle-cont'),
		fixedMenu = document.querySelector('.fixed-menu');
	let i = 0;

	menu.addEventListener('click', ()=> {
		if (i === 0) {
			menu.classList.add('menu-toggle-cont_active');
			fixedMenu.classList.add('show');
			i = 1; 
		} else {
			menu.classList.remove('menu-toggle-cont_active');
			fixedMenu.classList.remove('show');
			i = 0; 
		}
	});

});