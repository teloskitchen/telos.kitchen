const $mainLink = document.querySelector('#header-main-link')
let $linkSelected = undefined
const $body = document.querySelector('body')
const $checkbox = document.querySelector('.navigation-checkbox')
const $navigationList = document.querySelector('.navigation-list')

$checkbox.addEventListener('change', () => {
  $body.classList.toggle('overflow-hide')
})

$navigationList.addEventListener('click', (e) => {
  const { target } = e
  const isLink = target.classList.contains('navigation-link')
  if (isLink) {
    const activeLink = document.querySelector('.navigation-link-active')
    if (activeLink) activeLink.classList.toggle('navigation-link-active') 
    target.classList.toggle('navigation-link-active')
    $checkbox.checked = false
    $body.classList.toggle('overflow-hide')
  }
})

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