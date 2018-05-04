const links = document.querySelectorAll('.link');

function toggleThumbVisibility(event) {
	const project = event.target;
	const topPosition = project.offsetTop + 'px';
	const projectNumber = project.getAttribute('data-link');
	const thumb = document.getElementById(projectNumber);
	thumb.style.marginTop = topPosition;

	const thumbIsVisible = thumb.style.visibility === 'visible';
	thumb.style.visibility = thumbIsVisible ? 'hidden' : 'visible';
}


function addMouseListener() {
	for (const link of links) {

		link.addEventListener('mouseover', toggleThumbVisibility);
		link.addEventListener('mouseout', toggleThumbVisibility);

	}

}
if (window.innerWidth >= 1200) addMouseListener();

const images = document.querySelectorAll('.project-thumbnail');

window.addEventListener('scroll', highlightImages);
function highlightImages() {
	const {scrollTop} = document.documentElement;
	const imageHeight = 35;
	
	console.log('scrollTop:', scrollTop, 'imageheight:', imageHeight);

	if (scrollTop % imageHeight > 0) return;
	const imageIndex = Math.floor(scrollTop / imageHeight);
	console.log('image index:', imageIndex);

	images[imageIndex].className = 'slideUp';
	
	const newElement = document.createElement('div');
	let imageHTML = images[imageIndex].outerHTML;
	newElement.innerHTML = imageHTML;
	const currentLink = links[imageIndex];
	currentLink.appendChild(newElement);
	console.log(images.length);

}


