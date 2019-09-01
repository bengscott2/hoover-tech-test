'use strict'
const Hoover = require('../../src/hoover')

describe('Hoover', () => {

  describe('#move', () => {

    it('can move the hoover north if not against wall', () => {
      const hoover = new Hoover([0,0],[5,5],[0,0])
      expect(hoover.move("N")).toEqual([0,1])
    })

    it('can move the hoover east if not against wall', () => {
      const hoover = new Hoover([0,0],[5,5],[0,0])
      expect(hoover.move("E")).toEqual([1,0])
    })

    it('can move the hoover south if not against wall', () => {
      const hoover = new Hoover([1,1],[5,5],[0,0])
      expect(hoover.move("S")).toEqual([1,0])
    })

    it('can move the hoover west if not against wall', () => {
      const hoover = new Hoover([1,1],[5,5],[0,0])
      expect(hoover.move("W")).toEqual([0,1])
    })

    it('will return the direction if given something outside of NESW', () => {
      const hoover = new Hoover([1,1],[5,5],[0,0])
      expect(hoover.move("X")).toEqual(`unexpected direction input of X`)
    })

  })

  describe('#increasePosition', () => {

    it('can move the hoover north if not against wall', () => {
      const hoover = new Hoover([0,0],[5,5])
      expect(hoover.increasePosition(1)).toEqual([0,1])
    })

    it('will not move if it hits a wall', () => {
      const hoover = new Hoover([4,4],[5,5])
      expect(hoover.increasePosition(1)).toEqual([4,4])
    })

  })

  describe('#decreasePosition', () => {

    it('can move the hoover west if not against wall', () => {
      const hoover = new Hoover([1,1],[5,5])
      expect(hoover.decreasePosition(0)).toEqual([0,1])
    })

    it('will not move if it hits a wall', () => {
      const hoover = new Hoover([0,0],[5,5])
      expect(hoover.decreasePosition(0)).toEqual([0,0])
    })

  })

  describe('#checkForDirt', () => {

    it('increases dirtCaught by 1 when position equals dirt', () => {
      const hoover = new Hoover([1,1],[5,5],[[1,1]])
      expect(hoover.checkForDirt()).toEqual(1)
    })

    it('will return dirtCaught without increasing dirtCaught if position does not equal dirt', () => {
      const hoover = new Hoover([1,1],[5,5],[[1,0]])
      expect(hoover.checkForDirt()).toEqual(0)
    })

    it('will return dirtCaught without increasing dirtCaught there are no dirt loccations', () => {
      const hoover = new Hoover([1,1],[5,5],[])
      expect(hoover.checkForDirt()).toEqual(0)
    })

  })

  describe('#get locationAndDirtCaught', () => {

    it('returns location and dirt caught formatted', () => {
      const hoover = new Hoover([1,1],[5,5],[[1,0]])
      hoover.dirtCaught = 1
      expect(hoover.positionAndDirtCaught).toEqual('1 1\n1')
    })

  })

  describe('#removeDirt', () => {

    it('returns the array spliced from dirtLocation', () => {
      const hoover = new Hoover([1,1],[5,5],[[1,0]])
      expect(hoover.removeDirt(0)).toEqual([[1,0]])
    })

  })

})
