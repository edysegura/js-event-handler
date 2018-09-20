class NameField {
  constructor(name) {
    console.log('name', name)
  }
}

class NameGenerator {
  constructor() {
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
    // button.addEventListener('click', this.addName.bind(this))
    button.addEventListener('click', event => this.addName(event))
  }

  addName() {
    new NameField(this.names.pop())
  }
}

new NameGenerator()
