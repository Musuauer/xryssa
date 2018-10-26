let links = document.querySelectorAll('.link');
const images = document.querySelectorAll('.project-thumbnail');
const listItems = document.querySelectorAll('.list-item');

// --------- desktop version----- //

function toggleThumbVisibility(event) {
	const project = event.target;
	const projectImage = project.nextElementSibling.firstElementChild;

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

	const imageHeight = 280;

	var scrollBarPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

	const imageIndex = Math.floor(scrollBarPosition / imageHeight);

	const firstPosition = 40; //40
	const scrollIncrement = 160;

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
		
		console.log(scrollBarPosition, scrollIncrement);
		console.log(imageIndex);
		images[imageIndex].className = 'slideUp';
		listItems[imageIndex].className = 'new-list-item';
		links[imageIndex].style.border = 'none';
	}
}
