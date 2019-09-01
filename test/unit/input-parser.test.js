const inputParser = require('../../src/input-parser')

expectedOutput = {
  roomSize: [5,5],
  hooverPosition: [1,2],
  dirtLocation: [[1,0],[2,2],[2,3]],
  drivingInstructions: ['N','N','E','S','E','E','S','W','N','W','W']
}

describe('inputParser', () => {
  it('will return an object built from input.txt file', () => {
    return expect(inputParser('test.txt')).resolves.toEqual(expectedOutput)
  })
})
