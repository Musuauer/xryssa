const homeImages = {
	640: [
		'/img/homepage/from_my_west_03_WEB_640.jpg',
		'/img/homepage/i_have_never_17_WEB_640.jpg',
		'/img/homepage/lying_18_WEB_640.jpg',
		'/img/homepage/please_turn_out_02_WEB_640.jpg',
		'/img/homepage/right_and_wrong_06_WEB_640.jpg'
	],
	768: [
		'/img/homepage/from_my_west_03_WEB_768.jpg',
		'/img/homepage/i_have_never_17_WEB_768.jpg',
		'/img/homepage/lying_18_WEB_768.jpg',
		'/img/homepage/please_turn_out_02_WEB_768.jpg',
		'/img/homepage/right_and_wrong_06_WEB_768.jpg'
	],
	1068: [
		'/img/homepage/from_my_west_03_WEB_1068.jpg',
		'/img/homepage/i_have_never_17_WEB_1068.jpg',
		'/img/homepage/lying_18_WEB_1068.jpg',
		'/img/homepage/please_turn_out_02_WEB_1068.jpg',
		'/img/homepage/right_and_wrong_06_WEB_1068.jpg'
	],
	1472: [
		'/img/homepage/from_my_west_03_WEB_1472r.jpg',
		'/img/homepage/i_have_never_17_WEB_1472r.jpg',
		'/img/homepage/lying_18_WEB_1472r.jpg',
		'/img/homepage/please_turn_out_02_WEB_1472r.jpg',
		'/img/homepage/right_and_wrong_06_WEB_1472r.jpg'
	],
	2136: [
		'/img/homepage/from_my_west_03_WEB_2136r.jpg',
		'/img/homepage/i_have_never_17_WEB_2136r.jpg',
		'/img/homepage/lying_18_WEB_2136r.jpg',
		'/img/homepage/please_turn_out_02_WEB_2136r.jpg',
		'/img/homepage/right_and_wrong_06_WEB_2136r.jpg'
	],
	2880: [
		'/img/homepage/from_my_west_03_WEB_2880rr.jpg',
		'/img/homepage/i_have_never_17_WEB_2880rr.jpg',
		'/img/homepage/lying_18_WEB_2880rr.jpg',
		'/img/homepage/please_turn_out_02_WEB_2880rr.jpg',
		'/img/homepage/right_and_wrong_06_WEB_2880rr.jpg'
	]
};
	
const getAvailableImageSizes = imagesObject => Object.keys(imagesObject);

const getBestSizeToUse = (sizes, screenWidth) => {

	for (const size of sizes) {
		if (screenWidth < size) return size
	}

	return sizes[sizes.length - 1]
};

const pickARamdomImage = images => images[Math.floor(Math.random() * images.length)];

const getRandomBestResImage = images => {
	const availableSizes = getAvailableImageSizes(images)
	const screenWidth = window.innerWidth
	const bestSize = getBestSizeToUse(availableSizes, screenWidth)
	
	return pickARamdomImage(images[bestSize])
};

const baseUrl = window.location.href;

const selectedImage = getRandomBestResImage(homeImages);

function applyImage(selectedImage){
    document.getElementById('background').style.background = `url(${baseUrl + selectedImage})`;
}

applyImage(selectedImage);