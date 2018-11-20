function delegate(event) {
  event.stopPropagation()

  if (event.target !== event.currentTarget) {
    showOutput(event.target.id)
  }

  console.log('Target: ', event.target)
  console.log('Current Target: ', event.currentTarget)
}

function showOutput(message) {
  const output = document.querySelector('output')
  output.textContent = message + ' was clicked'
}

function generateElements(eventBus) {
  for (let i = 1; i < 201; i++) {
    let div = document.createElement('div')
    let divNumber = String(i).padStart(2, '0')
    div.id = 'div-' + divNumber
    div.textContent = 'Div ' + divNumber
    eventBus.appendChild(div)
  }
}

const eventBus = document.getElementById('event-bus')
eventBus.addEventListener('click', delegate)
document.addEventListener('click', () => console.log('document was clicked'))

generateElements(eventBus)
