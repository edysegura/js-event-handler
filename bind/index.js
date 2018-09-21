class HtmlService {
  constructor(name) {
    this.addName(name)
  }

  addName(name) {
    const listItem = document.createElement('li')
    const list = document.querySelector('#names')
    listItem.textContent = name
    list.appendChild(listItem)
  }
}

class NameGenerator {
  constructor() {
    this.index = 0
    this.loadNames()
    this.listenButtonClickEvent()
  }

  loadNames() {
    this.names = [
      'Cloud Strife',
      'Tifa Lockhart',
      'Aerith Gainsborough',
      'Barret Wallace',
      'Yuffie Kisaragi',
      'Vincent Valentine',
      'Zack Fair',
      'Red XIII',
      'Cait Sith',
      'Cid Highwind'
    ]
  }

  listenButtonClickEvent() {
    const button = document.querySelector('button')
    button.addEventListener('click', event => this.addName(event))
    // button.addEventListener('click', this.addName.bind(this))
  }

  addName() {
    new HtmlService(this.names[ this.index ])
    this.index = ++this.index % this.names.length
  }
}

new NameGenerator()
