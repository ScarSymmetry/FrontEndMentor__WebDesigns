const btnBurger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

btnBurger.addEventListener("click", (e) => {
	menu.classList.toggle("active");
	btnBurger.classList.toggle("active");
	document.body.classList.toggle("locked");
});
