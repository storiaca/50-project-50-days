const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRatin = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    //selectedRatin = e.target.alt
    selectedRatin = e.target.nextElementSibling.innerHTML
    console.log(selectedRatin);
  }
})

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
     <i class="fas fa-heart"></i>
     <strong>Thank You</strong>
     <br/>
     <strong>Feedback: ${selectedRatin}</strong>
     <p>We'll use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  // ratings.forEach(item => item.classList.remove('active'))
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}


