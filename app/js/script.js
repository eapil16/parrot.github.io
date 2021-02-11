'use strict';
document.addEventListener('DOMContentLoaded', () => {
    
	const menu = document.querySelector('.menu-toggle-cont'),
		fixedMenu = document.querySelector('.fixed-menu');

	menu.addEventListener('click', ()=> {
		menu.classList.toggle('menu-toggle-cont_active');
		fixedMenu.classList.toggle('show');
	});

});