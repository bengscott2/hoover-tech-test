const parser = require('./src/input-parser');
const Controller = require('./src/controller');

async function start(input = 'input.txt', inputParser = parser, controller = Controller) {
  const navParameters = await inputParser(input);
  const hooverController = new controller(navParameters);
  const finalReturn = hooverController.executeInstructions();
  console.log(finalReturn);
  return finalReturn;
}

if (require.main === module) {
  start();
} else {
  module.exports = start;
}
