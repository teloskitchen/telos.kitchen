// About
const $about = document.querySelector('.about')
const $informationAbout = document.querySelector('.about .information')
const $aboutImg = document.querySelector('.about-img')
// Team
const $team = document.querySelector('.team')
const $sun = document.querySelector('.sun')
const $secondBg = document.querySelector('.secondary-bg')
// Values
const $valuesList = document.querySelector('.values-list')
const $values = [...$valuesList.children]
// Votes
const $vote = document.querySelector('.vote-container')
const $img = document.querySelector('.vote-img')

const aboutAction = (entries) => {
  if(entries[0].isIntersecting) {
    $informationAbout.classList.remove('fadeOutL')
    $aboutImg.classList.remove('fadeOut') 
    $informationAbout.classList.add('fadeInL')
    $aboutImg.classList.add('fadeIn') 
  } else {
    $informationAbout.classList.remove('fadeInL')
    $aboutImg.classList.remove('fadeIn') 
    $informationAbout.classList.add('fadeOutL')
    $aboutImg.classList.add('fadeOut') 
  }
}

const aboutObserver = new IntersectionObserver(aboutAction, {
  threshold: .3
})

aboutObserver.observe($about)

///  TEAM
// const sunPosition = $sun.getBoundingClientRect()
// console.log(sunPosition)
// const sunMaxHeight = sunPosition.bottom
// console.log(sunMaxHeight, 'Max Heigt')
// window.addEventListener('scroll', e => {
//   const scrollPosition = window.scrollY
//   console.log(scrollPosition, 'Position')
//   console.log(scrollPosition > sunMaxHeight - 500,scrollPosition < sunMaxHeight,  'Validation')
//   if(scrollPosition > sunMaxHeight - 500 & scrollPosition < sunMaxHeight) {
//     console.log('Estamos en las posiciones correctas')
//   }
// })

// Values
const valuesAction = (entries) => {
  if(entries[0].isIntersecting) {
    $values.forEach((value, index) => {
      value.classList.add(`up-${index + 1}`)
    })
  } else {
    $values.forEach((value, index)=> {
      // value.classList.remove(`up-${index + 1}`)
    })
  }
}

const valuesObserver = new IntersectionObserver(valuesAction,{
  rootMargin: '0px 0px 300px 0px',
  threshold: .5
})
valuesObserver.observe($valuesList)


// Votes
const voteAction = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      $img.classList.add('fadeIn')
    } else {
      // $img.classList.remove('fadeIn')
    }
  });
}

const voteObserver = new IntersectionObserver(voteAction,{
  threshold: .5
})

voteObserver.observe($vote)