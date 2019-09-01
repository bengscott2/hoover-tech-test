
const fs = require('fs');
const readline = require('readline');
const path = require('path');

module.exports = async function (input) {
  const filename = path.join(__dirname, `../data/${input}`);
  const fileStream = fs.createReadStream(filename);
  const parsedObject = {
    roomSize: [],
    hooverPosition: [],
    dirtLocation: [],
    drivingInstructions: [],
  };
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  let index = 0;

  for await (const line of rl) {
    if (index === 0) {
      parsedObject.roomSize = [parseInt(line[0]), parseInt(line[2])];
    } else if (index === 1) {
      parsedObject.hooverPosition = [parseInt(line[0]), parseInt(line[2])];
    } else if (line.includes('N', 'E', 'S', 'W')) {
      parsedObject.drivingInstructions = line.split('');
    } else {
      parsedObject.dirtLocation.push([parseInt(line[0]), parseInt(line[2])]);
    }
    index++;
  }

  return parsedObject;
};
