const EmitEvent = require('events')
class A extends EmitEvent {
  constructor(name, age) {
    super()
    this.name = name
    this.age = age
  }
  growUp() {
    setInterval(() => {
      this.age = this.age + 1
      this.emit('growUp', this.age)
    }, 1000);
  }
}
const a = new A('hah', 0)
a.addListener('growUp', (age) => {
  console.log(`${a.name} is ${age}`)
})
a.growUp()