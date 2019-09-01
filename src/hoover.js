
module.exports = class Hoover {
  constructor(position, roomSize, dirtLocation) {
    this.position = position;
    this.roomSize = roomSize;
    this.dirtLocation = dirtLocation;
    this.dirtCaught = 0;
  }

  move(direction) {
    let moveResult;
    switch (direction) {
      case 'N':
        moveResult = this.increasePosition(1);
        break;
      case 'S':
        moveResult = this.decreasePosition(1);
        break;
      case 'E':
        moveResult = this.increasePosition(0);
        break;
      case 'W':
        moveResult = this.decreasePosition(0);
        break;
      default:
        moveResult = `unexpected direction input of ${direction}`;
        break;
    }
    this.checkForDirt();
    return moveResult;
  }

  increasePosition(axisIndex) {
    if (this.position[axisIndex] + 1 < this.roomSize[axisIndex]) { this.position[axisIndex] += 1; }
    return this.position;
  }

  decreasePosition(axisIndex) {
    if (this.position[axisIndex] - 1 >= 0) { this.position[axisIndex] -= 1; }
    return this.position;
  }

  checkForDirt() {
    if (this.dirtLocation.length < 1) return this.dirtCaught;

    this.dirtLocation.forEach((location, index) => {
      if (location[0] === this.position[0] && location[1] === this.position[1]) {
        this.removeDirt(index);
        this.dirtCaught += 1;
      }
    });
    return this.dirtCaught;
  }

  removeDirt(dirtPosition) {
    return this.dirtLocation.splice(dirtPosition, 1);
  }

  get positionAndDirtCaught() {
    return `${this.position.join(' ')}\n${this.dirtCaught}`;
  }
};
