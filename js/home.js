const homeImages640 = { // images width: 640px
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

const homeImages768 = { // images width: 768px
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

const homeImages1068 = { // images width: 1068px
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

const homeImages1472r = { // images width: 1472px
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

const homeImages2136r = { // images width: 2136px
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

const homeImages2880r = { // images width: 2880px
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


function changeImage() {
	let randomNumber = Math.floor((Math.random() * 5) + 1);
	document.getElementById('background').style.background = 'url(\'' + setWidth[randomNumber].imageUrl + '\')';
}

let setWidth = function () {  
	let correctWidth;
	if (window.innerWidth < 641) {
		correctWidth = homeImages640;
	}
	else if (window.innerWidth < 769) {
		correctWidth = homeImages768;
	}
	else if (window.innerWidth < 1069) {
		correctWidth = homeImages1068;
	}
	else if (window.innerWidth < 1473) {
		correctWidth = homeImages1472r;
	}
	else if (window.innerWidth < 2137) {
		correctWidth = homeImages2136r;
	}
	else {
		correctWidth = homeImages2880r;
	}

};

changeImage();