class NameField {
  constructor(name) {
    console.log('name', name)
  }
}

class NameGenerator {
  constructor() {
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
    this.addButtonListener()
  }

  addButtonListener() {
    const button = document.querySelector('button')
    button.addEventListener('click', this.addName.bind(this))
  }

  addName() {
    new NameField(this.names.pop())
  }
}

new NameGenerator()