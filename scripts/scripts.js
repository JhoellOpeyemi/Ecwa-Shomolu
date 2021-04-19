// SELECT ELEMENTS FROM DOM
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelector('.nav-link');
const headerNav = document.querySelector('.header-nav');
const churchName = document.querySelector('.church-name');

// Slider Elements
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('button#next');
const prevBtn = document.querySelector('button#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

// EVENT LISTENERS
// Add Event Listener To Hamburger
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('close');
	navLinks.classList.toggle('open');
	headerNav.classList.toggle('open');
	churchName.classList.toggle('open');
});

// Add Event Listener To Slider Buttons
nextBtn.addEventListener('click', (e) => {
	nextSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

prevBtn.addEventListener('click', (e) => {
	prevSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

// Slider Functions
const nextSlide = () => {
	// Get current class
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// Check for next slide
	if (current.nextElementSibling) {
		// Add current to next sibling
		current.nextElementSibling.classList.add('current');
	} else {
		// Add current to first slide
		slides[0].classList.add('current');
	}

	setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
	// Get current class
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// Check for prev slide
	if (current.previousElementSibling) {
		// Add current to prev sibling
		current.previousElementSibling.classList.add('current');
	} else {
		// Add current to last slide
		slides[slides.length - 1].classList.add('current');
	}

	setTimeout(() => current.classList.remove('current'));
};

// Auto Slide
if (auto) {
	// Run next slide at interval time
	slideInterval = setInterval(nextSlide, intervalTime);
}
