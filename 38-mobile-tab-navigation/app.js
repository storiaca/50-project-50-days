const contents = document.querySelectorAll('.content')
const listitems = document.querySelectorAll('nav ul li')

listitems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents()
    hideAllItems()

    item.classList.add('active')
    contents[idx].classList.add('show')
  })
})

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
  listitems.forEach(item => item.classList.remove('active'))
}