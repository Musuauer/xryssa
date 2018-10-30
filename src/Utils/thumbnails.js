// ------------mobile version----------------------//
export function addScrollListener () {
  if (window.innerWidth < 1000) {
    console.log('scrolllistener')
    window.addEventListener('scroll', highlightImages)
  }
}

export function highlightImages () {
  let links = document.querySelectorAll('.link')
  const images = document.querySelectorAll('.project-thumbnail')
  const listItems = document.querySelectorAll('.list-item')
  console.log('highlight')
  console.log('images', images)
  const imageHeight = 280

  var scrollBarPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

  const imageIndex = Math.floor(scrollBarPosition / imageHeight)

  const firstPosition = 40 // 40
  const scrollIncrement = 160

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
    console.log(scrollBarPosition, scrollIncrement)
    console.log('imageindex', imageIndex)
    console.log('image with index', images[imageIndex])
    images[imageIndex].className = 'slideUp'
    listItems[imageIndex].className = 'new-list-item'
    links[imageIndex].style.border = 'none'
  }
}
