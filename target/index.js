'use strict'

const output = document.querySelector('output')

function showTargetElement(event) {
  output.textContent = event.target.nodeName
}

document.addEventListener('mousemove', showTargetElement)