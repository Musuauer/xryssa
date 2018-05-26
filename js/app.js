let links = document.querySelectorAll('.link');
const images = document.querySelectorAll('.project-thumbnail');
const listItems = document.querySelectorAll('.list-item');

// --------- desktop version----- //

function toggleThumbVisibility(event) {
	const project = event.target;
	const projectImage = project.nextElementSibling;

	const thumbIsVisible = projectImage.style.display === 'block';
	projectImage.style.display = thumbIsVisible ? 'none' : 'block';
}


function addMouseListener() {
	for (const link of links) {

		link.addEventListener('mouseover', toggleThumbVisibility);
		link.addEventListener('mouseout', toggleThumbVisibility);

	}

}
if (window.innerWidth >= 1200) addMouseListener();

// ------------mobile version----------------------//

if (window.innerWidth < 1000) {
	window.addEventListener('scroll', highlightImages);

}

function highlightImages() {

	const imageHeight = 300;

	var scrollBarPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	console.log('scrollbarposition', scrollBarPosition);

	const imageIndex = Math.floor(scrollBarPosition / imageHeight);
	console.log('image index:', imageIndex);

	const firstPosition = 40;
	const scrollIncrement = 360;

	if (
		scrollBarPosition > firstPosition ||
		scrollBarPosition > scrollIncrement ||
		scrollBarPosition > scrollIncrement * 2 ||
		scrollBarPosition > scrollIncrement * 3 ||
		scrollBarPosition > scrollIncrement * 4 ||
		scrollBarPosition > scrollIncrement * 5 ||
		scrollBarPosition > scrollIncrement * 6 ||
		scrollBarPosition > scrollIncrement * 7 ||
		scrollBarPosition > scrollIncrement * 8 ||
		scrollBarPosition > scrollIncrement * 9 ||
		scrollBarPosition > scrollIncrement * 10
	) {
		images[imageIndex].className = 'slideUp';
		listItems[imageIndex].className = 'new-list-item';
		links[imageIndex].style.border = 'none';
	}
}

