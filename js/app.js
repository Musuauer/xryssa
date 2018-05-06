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

window.addEventListener('scroll', highlightImages);
function highlightImages() {
	// const {scrollTop} = document.documentElement;
	// const imageHeight = 35;
	
	// console.log('scrollTop:', scrollTop, 'imageheight:', imageHeight);

	// if (scrollTop % imageHeight > 0) return;
	// const imageIndex = Math.floor(scrollTop / imageHeight);
	// console.log('image index:', imageIndex);
	const imageHeight = 220;
	

	var scrollBarPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
console.log('scrollbarposition', scrollBarPosition);

const imageIndex = Math.floor(scrollBarPosition / imageHeight);
	console.log('image index:', imageIndex);

    // At specifiv position do what you want
		if(scrollBarPosition > 60 && scrollBarPosition < 65
				|| scrollBarPosition > 330 && scrollBarPosition < 335
					|| scrollBarPosition > 600 && scrollBarPosition < 605
					|| scrollBarPosition > 870 && scrollBarPosition < 875) {
			console.log('hi');
	images[imageIndex].className = 'slideUp';
	listItems[imageIndex].className = 'new-list-item';
	links[imageIndex].style.border = 'none';
		}
	
}

//----------option 3/////////

window.onscroll=function(){changeMenu()};

function changeMenu()
{
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop;

    // At specifiv position do what you want 
    if(scrollBarPosition == 0) {
        document.getElementById('first-project').className = 'slideUp';
    }
    // else {
    //     document.getElementById('first-project').innerHTML = "User is not on top of the page, position="  + scrollBarPosition;
    // }
}

// ---------option 2/////////////

// what should we do when scrolling occurs
// const revealThumb = function (event){
// console.log(event.target);
// 	const linkPosition = event.target.getBoundingClientRect().top;
// 	console.log('linkposition', linkPosition);
// 	if (linkPosition < 150 && linkPosition > 50){
// 		toggleThumbVisibility(linkPosition);
// 	}
// };

// grab elements as array, rather than as NodeList
// var elements = document.querySelectorAll("...");
// links = Array.prototype.slice.call(links);

// and then make each element do something on scroll
// const container = document.getElementById('wrapper');
// container.addEventListener('scroll', revealThumb);



// if (window.innerWidth < 1200) {
// 	addScrollListener();
// }
