const $mainLink = document.querySelector('#header-main-link')
let $linkSelected = undefined


$mainLink.addEventListener('click', (e) => {
  const { target }  = e
  if (target.tagName == 'SPAN') {
    const spanSelector = target.parentElement.nextElementSibling
    if ($linkSelected) {
      $linkSelected.classList.toggle('link-active')
    }
    $linkSelected = spanSelector
    spanSelector.classList.toggle('link-active')
  }
})