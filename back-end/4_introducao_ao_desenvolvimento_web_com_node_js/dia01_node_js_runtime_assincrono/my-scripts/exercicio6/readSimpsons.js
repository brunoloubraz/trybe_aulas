const fs = require('fs')

async function read() {
  try {
    const data = await fs.readFileSync('simpsons.json', 'utf8')
    const simpsons = JSON.parse(data)
    console.log(simpsons);
    const strings = simpsons.map(({id, name}) =>  `${id} - ${name}`)
    strings.forEach((string) => console.log(string))
  } catch(error) {
    console.error(error)
  }
}

read()

