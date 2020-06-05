const menuBtn = document.querySelector('.m-menu'),
			menuSidebar = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', () => {
	menuSidebar.classList.toggle('active');
});