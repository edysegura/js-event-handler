'use strict'

const banner = document.querySelector('div')
const mousePosition = document.querySelector('output')

function moveBanner(event) {
}

function showMousePosition(event) {
  mousePosition.textContent = `x: ${event.clientX}, y: ${event.clientX}`
}

document.addEventListener('mousemove', moveBanner)
document.addEventListener('mousemove', showMousePosition)