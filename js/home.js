const homeImages640 = { // Create a JSON for your images
	1: {
		imageUrl: '/img/homepage/from_my_west_03_WEB_640.jpg'
	}, 
	2: {
		imageUrl: '/img/homepage/i_have_never_17_WEB_640.jpg'
	}, 
	3: {
		imageUrl: '/img/homepage/lying_18_WEB_640.jpg'
	}, 
	4: {
		imageUrl: '/img/homepage/please_turn_out_02_WEB_640.jpg'
	}, 
	5: {
		imageUrl: '/img/homepage/right_and_wrong_06_WEB_640.jpg'
	}
};

const homeImages768 = { // Create a JSON for your images
	1: {
		imageUrl: '/img/homepage/from_my_west_03_WEB_768.jpg'
	}, 
	2: {
		imageUrl: '/img/homepage/i_have_never_17_WEB_768.jpg'
	}, 
	3: {
		imageUrl: '/img/homepage/lying_18_WEB_768.jpg'
	}, 
	4: {
		imageUrl: '/img/homepage/please_turn_out_02_WEB_768.jpg'
	}, 
	5: {
		imageUrl: '/img/homepage/right_and_wrong_06_WEB_768.jpg'
	}
};

const homeImages1068 = { // Create a JSON for your images
	1: {
		imageUrl: '/img/homepage/from_my_west_03_WEB_1068.jpg'
	}, 
	2: {
		imageUrl: '/img/homepage/i_have_never_17_WEB_1068.jpg'
	}, 
	3: {
		imageUrl: '/img/homepage/lying_18_WEB_1068.jpg'
	}, 
	4: {
		imageUrl: '/img/homepage/please_turn_out_02_WEB_1068.jpg'
	}, 
	5: {
		imageUrl: '/img/homepage/right_and_wrong_06_WEB_1068.jpg'
	}
};

const homeImages1472r = { // Create a JSON for your images
	1: {
		imageUrl: '/img/homepage/from_my_west_03_WEB_1472r.jpg'
	}, 
	2: {
		imageUrl: '/img/homepage/i_have_never_17_WEB_1472r.jpg'
	}, 
	3: {
		imageUrl: '/img/homepage/lying_18_WEB_1472r.jpg'
	}, 
	4: {
		imageUrl: '/img/homepage/please_turn_out_02_WEB_1472r.jpg'
	}, 
	5: {
		imageUrl: '/img/homepage/right_and_wrong_06_WEB_1472r.jpg'
	}
};

const homeImages2136r = { // Create a JSON for your images
	1: {
		imageUrl: '/img/homepage/from_my_west_03_WEB_2136r.jpg'
	}, 
	2: {
		imageUrl: '/img/homepage/i_have_never_17_WEB_2136r.jpg'
	}, 
	3: {
		imageUrl: '/img/homepage/lying_18_WEB_2136r.jpg'
	}, 
	4: {
		imageUrl: '/img/homepage/please_turn_out_02_WEB_2136r.jpg'
	}, 
	5: {
		imageUrl: '/img/homepage/right_and_wrong_06_WEB_2136r.jpg'
	}
};

const homeImages2880r = { // Create a JSON for your images
	1: {
		imageUrl: '/img/homepage/from_my_west_03_WEB_2880r.jpg'
	}, 
	2: {
		imageUrl: '/img/homepage/i_have_never_17_WEB_2880r.jpg'
	}, 
	3: {
		imageUrl: '/img/homepage/lying_18_WEB_2880r.jpg'
	}, 
	4: {
		imageUrl: '/img/homepage/please_turn_out_02_WEB_2880r.jpg'
	}, 
	5: {
		imageUrl: '/img/homepage/right_and_wrong_06_WEB_2880r.jpg'
	}
};




function changeImage(){
	var randomNumber = Math.floor((Math.random() * 10) + 1); //Change 10 to the number of images in your JSON
	document.getElementById('background').style.background = 'url(\''+homeImages640[randomNumber].imageUrl+'\')';
}

function WindowWidthToJSON(){

}
function getWindowWidth(){
  let arrayName = 'homeImages' +window.innerWidth;
}

if (window.innerWidth < 641) changeImage();