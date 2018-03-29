
const eventBus = document.getElementById('event-bus')

function delegate(event) {
  event.stopPropagation()
  if (event.target !== event.currentTarget) {
    output(event.target.id)
  }
  console.log('Target: ', event.target)
  console.log('Current Target: ', event.currentTarget)
}

function output(message) {
  const out = document.querySelector('output')
  out.textContent = message + ' was clicked'
}

function generateElements() {
  for (let i = 1; i < 201; i++) {
    let div = document.createElement('div')
    let divNumber = String(i).padStart(2, '0')
    div.id = 'div-' + divNumber
    div.textContent = 'Div ' + divNumber
    eventBus.appendChild(div)
  }
}

generateElements()
eventBus.addEventListener('click', delegate)
document.addEventListener('click', () => console.log('document was clicked'))