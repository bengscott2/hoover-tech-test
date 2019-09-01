const parser = require('./src/input-parser');
const Controller = require('./src/controller')

async function start (input = 'input.txt',inputParser = parser, controller = Controller) {
  let navParameters = await inputParser(input)
  let hooverController = new controller(navParameters)
  let finalReturn = hooverController.executeInstructions()
  console.log(finalReturn)
  return finalReturn
}

if (require.main === module) {
  start()
} else {
  module.exports = start
}
