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

function expandAndShowThumb(){
	for (const link of links){
		let linkPosition = link.getBoundingClientRect().y;
		if (linkPosition <= 110){
			link.style.color = 'red';
		}
	}
}

function addScrollListener(){
	for (const link of links) {

		link.addEventListener('mouseover', toggleThumbVisibility);
		link.addEventListener('mouseout', toggleThumbVisibility);

	}

}
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myP").className = "test";
    } else {
        document.getElementById("myP").className = "";
    }
}
if (window.innerWidth <= 1200) addScrollListener();