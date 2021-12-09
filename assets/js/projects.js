$projectsContainer = document.querySelector('.projects-list')
$projectsImg = [...document.querySelector('.projects-images').children]
$projects = [...document.querySelector('.projects-list').children]

activeFirstBodyProject()

$projectsContainer.addEventListener('click', e => {
  const { target } = e
  const isTitle = target.classList.contains('project-title')
  if( isTitle ) {
    hiddenBodyProject()
    target.classList.toggle('project-title-active')
    $span = target.querySelector('.project-symbol')
    changeSpanSymbol($span)
    const $body  = target.nextElementSibling
    $body.classList.toggle('project-body-active')
    toggleImg()
  }
})

function activeFirstBodyProject () {
  $project = $projects[0]
  $title = $project.querySelector('.project-title')
  $title.classList.toggle('project-title-active')
  $span = $project.querySelector('.project-symbol')
  changeSpanSymbol($span)
  $projectBody = $project.querySelector('.project-body')
  $projectBody.classList.toggle('project-body-active')
  toggleImg()
}

function hiddenBodyProject () {
  $projectBody = document.querySelector('.project-body-active')
  $title = document.querySelector('.project-title-active')
  $span = $projectBody.previousElementSibling.querySelector('.project-symbol')
  changeSpanSymbol($span)
  toggleImg()
  $projectBody.classList.toggle('project-body-active')
  $title.classList.toggle('project-title-active')
}

function changeSpanSymbol ($span) {
  $span.classList.toggle('project-symbol-hide')
  $span.innerText = $span.innerText == "-" ? "+" : "-"
  $span.classList.toggle('project-symbol-hide') 
}

function toggleImg () {
  const index = $projects.findIndex(element => element.querySelector('.project-body-active'))
  $projectsImg[index].classList.toggle('img-active')
}