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

	const firstPosition = 60;
	const scrollIncrement = 330;

	if (
		scrollBarPosition > firstPosition && scrollBarPosition < firstPosition + 5 ||
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
		console.log('hi');
		images[imageIndex].className = 'slideUp';
		listItems[imageIndex].className = 'new-list-item';
		links[imageIndex].style.border = 'none';
	}
}


// window.onscroll=function(){changeMenu();};

// function changeMenu()
// {
//     var scrollBarPosition = window.pageYOffset | document.body.scrollTop;

//     // At specifiv position do what you want 
//     if(scrollBarPosition == 0) {
//         document.getElementById('first-project').className = 'slideUp';
//     }

// }

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
