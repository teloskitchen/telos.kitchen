$articlesContainer = document.querySelector('.articles-list')
$articlesImg = [...document.querySelector('.articles-images').children]
$articles = [...document.querySelector('.articles-list').children]

activeFirstBodyArticle()

$articlesContainer.addEventListener('click', e => {
  const { target } = e
  const isTitle = target.classList.contains('article-title')
  if( isTitle ) {
    hiddenBodyArticle()
    target.classList.toggle('article-title-active')
    $span = target.querySelector('.article-symbol')
    changeSpanSymbol($span)
    const $body  = target.nextElementSibling
    $body.classList.toggle('article-body-active')
    toggleImg()
  }
})

function activeFirstBodyArticle () {
  $article = $articles[0]
  $title = $article.querySelector('.article-title')
  $title.classList.toggle('article-title-active')
  $span = $article.querySelector('.article-symbol')
  changeSpanSymbol($span)
  $articleBody = $article.querySelector('.article-body')
  $articleBody.classList.toggle('article-body-active')
  toggleImg()
}

function hiddenBodyArticle () {
  $articleBody = document.querySelector('.article-body-active')
  $title = document.querySelector('.article-title-active')
  $span = $articleBody.previousElementSibling.querySelector('.article-symbol')
  changeSpanSymbol($span)
  toggleImg()
  $articleBody.classList.toggle('article-body-active')
  $title.classList.toggle('article-title-active')
}

function changeSpanSymbol ($span) {
  $span.classList.toggle('article-symbol-hide')
  $span.innerText = $span.innerText == "-" ? "+" : "-"
  $span.classList.toggle('article-symbol-hide') 
}

function toggleImg () {
  const index = $articles.findIndex(element => element.querySelector('.article-body-active'))
  $articlesImg[index].classList.toggle('img-active')
}