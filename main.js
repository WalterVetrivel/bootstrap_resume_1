window.onscroll = function () {
	toggleStickyNavbar();
};

var navbar = document.getElementById("navbar");

function toggleStickyNavbar() {
	if (window.pageYOffset >= 60) {
		navbar.classList.remove("sticky-navbar");
		navbar.classList.add("fixed-top");
	} else {
		navbar.classList.add("sticky-navbar");
		navbar.classList.remove("fixed-top");
	}
}

var scroll = new SmoothScroll('a[href*="#"]', {
	offset: 80,
	clip: true
});

window.sr = ScrollReveal({
	reset: true
});

sr.reveal('h1, h2', {
	duration: 1000
});
sr.reveal('.btn', {
	duration: 1000
});
sr.reveal('.bio-content p', {
	duration: 1200
}, 120);
sr.reveal('.work-experience', {
	duration: 1500
}, 150);
sr.reveal('.responsibility-list li', {
	duration: 1500
}, 150);
sr.reveal('.education', {
	duration: 2000
}, 200);
sr.reveal('.skills p', {
	duration: 1200
}, 120);
sr.reveal('.contact-info p', {
	duration: 1200
}, 120);
sr.reveal('.copyright', {
	duration: 1000
});