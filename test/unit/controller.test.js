const Controller = require('../../src/controller')


describe('Controller', () => {

  it('creates a Hoover upon instantiation', () => {
    const hooverMock = jest.fn()
    const navParametersMock = {hooverPosition:[], roomSize: [], dirtLocation: [], drivingInstructions: ["N","N"]}
    const controller = new Controller(navParametersMock, hooverMock)
    expect(hooverMock.mock.instances.length).toBe(1)
  })

  it('calls move once per driving instruction and returns final result', () => {
    const navParametersMock = {
        roomSize: [ 5, 5 ],
        hooverPosition: [ 1, 2 ],
        dirtLocation: [ [ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ],
        drivingInstructions: [
          'N', 'N', 'E',
          'S', 'E', 'E',
          'S', 'W', 'N',
          'W', 'W'
        ]
      }
    let hooverMoveMock = jest.fn()
    let hooverMock = jest.fn( () => {
        return {move: hooverMoveMock, positionAndDirtCaught: "1 3\n1"}
    });
    const controller = new Controller(navParametersMock, hooverMock)
    expect(controller.executeInstructions()).toBe("1 3\n1")
    expect(hooverMoveMock.mock.calls.length).toBe(11);
  })
  
})
