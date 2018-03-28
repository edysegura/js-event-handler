'use strict'

const eventBus = document.getElementById('event-bus')

function delegate(event) {
  if (event.target !== event.currentTarget) {
    output(event.target.id)
  }
  event.stopPropagation()
}

function output(message) {
  const out = document.querySelector('output')
  out.innerHTML = message + ' was clicked'
}

eventBus.addEventListener('click', delegate)
