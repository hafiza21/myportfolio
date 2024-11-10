const hamburger = document.querySelector('.hamburger');
const navigation__links = document.querySelector('.navigation__container');

    hamburger.addEventListener('click', () => {
	   hamburger.classList.toggle('active');
	   navigation__links.classList.toggle('active');
})

document.querySelectorAll(".link__name") .forEach(n => n.
	addEventListener("click", () => {
		hamburger.classList.remove("active");
		navigation__links.classList.remove("active");
	}));
	

