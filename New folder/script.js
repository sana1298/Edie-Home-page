let navIcons = document.querySelector(".nav-menu-icon");
let barIcon = document.querySelector(".fa-bars");
let timesIcon = document.querySelector(".fa-times");
let navMenuList = document.querySelector(".nav-menu-list");
navIcons.addEventListener("click", () => {
	barIcon.classList.toggle("hidden");
	timesIcon.classList.toggle("hidden");

	navMenuList.classList.toggle("motion");
});