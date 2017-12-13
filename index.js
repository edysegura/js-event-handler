'use strict'

const eventBus = document.getElementById('event-bus')

function delegate(event) {
    if(event.target !== event.currentTarget) {
        console.log(event.target.id)
    }
    event.stopPropagation()
}

eventBus.addEventListener('click', delegate)