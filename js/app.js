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

// function expandAndShowThumb(){
// 	for (const link of links){
// 		let linkPosition = link.getBoundingClientRect().y;
// 		if (linkPosition <= 110){
// 			link.style.color = 'red';
// 		}
// 	}
// }



// if (window.innerWidth <= 1200) addScrollListener();

// function addScrollListener(){
// 	window.addEventListener('scroll', highlightImages);
// }
window.addEventListener('scroll', highlightImages);
function highlightImages() {
	const {scrollTop} = document.documentElement;
	const imageHeight = 35;
	
	console.log('scrollTop:', scrollTop, 'imageheight:', imageHeight);

	if (scrollTop % imageHeight > 0) return;
	const imageIndex = Math.floor(scrollTop / imageHeight);
	console.log('image index:', imageIndex);

	const images = document.querySelectorAll('.project-thumbnail');
	images[imageIndex].className = 'slideUp';
	
	const newElement = document.createElement('div');
	newElement.innerHTML = images[imageIndex].outerHTML;
	const currentLink = links[imageIndex];
	currentLink.appendChild(newElement);
	
	
	
	
    
}

