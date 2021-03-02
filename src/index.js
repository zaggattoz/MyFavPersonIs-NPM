const messages = [
  'Diego',
  'Oscar',
  'Leo',
  'Tato',
  'Cata',
  'Fer',
  'Carolina',
  'Tati',
  'Megan'
]

const myfavpersonis = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { myfavpersonis }