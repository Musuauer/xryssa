export function toggleThumbVisibility (event) {
  const project = event.target
  const projectImage = project.nextElementSibling.firstElementChild

  const thumbIsVisible = projectImage.style.display === 'block'
  projectImage.style.display = thumbIsVisible ? 'none' : 'block'
}
