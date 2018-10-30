export function coverImages () {
  const homeImages = {
    640: [
      '../../static/img/homepage/from_my_west_03_WEB_1068.jpg',
      '../../static/img/homepage/i_have_never_17_WEB_1068.jpg',
      '../../static/img/homepage/i_cant_relax_02_WEB_1068.jpg',
      '../../static/img/homepage/please_turn_out_02_WEB_1068.jpg',
      '../../static/img/homepage/right_and_wrong_06_WEB_1068.jpg'
    ],
    768: [
      '../../static/img/homepage/from_my_west_03_WEB_1472r.jpg',
      '../../static/img/homepage/i_have_never_17_WEB_1472r.jpg',
      '../../static/img/homepage/i_cant_relax_02_WEB_1472r.jpg',
      '../../static/img/homepage/please_turn_out_02_WEB_1472r.jpg',
      '../../static/img/homepage/right_and_wrong_06_WEB_1472r.jpg'
    ],
    1068: [
      '../../static/img/homepage/from_my_west_03_WEB_2136r.jpg',
      '../../static/img/homepage/i_have_never_17_WEB_2136r.jpg',
      '../../static/img/homepage/i_cant_relax_02_WEB_2136r.jpg',
      '../../static/img/homepage/please_turn_out_02_WEB_2136r.jpg',
      '../../static/img/homepage/right_and_wrong_06_WEB_2136r.jpg'
    ],
    1472: [
      '../../static/img/homepage/from_my_west_03_WEB_2880r.jpg',
      '../../static/img/homepage/i_have_never_17_WEB_2880r.jpg',
      '../../static/img/homepage/i_cant_relax_02_WEB_2880r.jpg',
      '../../static/img/homepage/please_turn_out_02_WEB_2880r.jpg',
      '../../static/img/homepage/right_and_wrong_06_WEB_2880r.jpg'
    ]
  }
  console.log('coverimages working')

  const getAvailableImageSizes = imagesObject => Object.keys(imagesObject)

  const getBestSizeToUse = (sizes, screenWidth) => {
    for (const size of sizes) {
      if (screenWidth < size) return size
    }

    return sizes[sizes.length - 1]
  }

  const pickARamdomImage = images => images[Math.floor(Math.random() * images.length)]

  const getRandomBestResImage = images => {
    const availableSizes = getAvailableImageSizes(images)
    const screenWidth = window.innerWidth
    const bestSize = getBestSizeToUse(availableSizes, screenWidth)

    return pickARamdomImage(images[bestSize])
  }

  const selectedImage = getRandomBestResImage(homeImages)
  const imageContainer = document.getElementById('background')

  function applyImage (selectedImage) {
    imageContainer.style.cssText = `background: url(.${selectedImage}) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; overflow: hidden;`
  }

  applyImage(selectedImage)
}
