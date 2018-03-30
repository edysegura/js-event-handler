'use strict'

const banner = document.querySelector('.banner')
const mousePosition = document.querySelector('output')

function moveBanner(event) {
  banner.style.transform = `
    translateX(${event.clientX}px)
    translateY(${event.clientY}px)
  `
}

function showMousePosition(event) {
  mousePosition.textContent = `x: ${event.clientX}, y: ${event.clientY}`
}

document.addEventListener('mousemove', moveBanner)
document.addEventListener('mousemove', showMousePosition)