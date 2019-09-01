const app = require('../../app')

describe('App feature test', () =>{
  it('will return the expected output when given test file', async () => {
    consoleMock = jest.fn()
    global.console.log = consoleMock;
    expect(await app('test.txt')).toEqual("1 3\n1")
    expect(consoleMock.mock.calls.length).toBe(1)
  })
})
