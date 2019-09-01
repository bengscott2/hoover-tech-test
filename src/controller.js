const Hoover = require('./hoover')

module.exports = class Controller {
  constructor(navParameters, hoover = Hoover) {
    this.hoover = new hoover(navParameters.hooverPosition,
      navParameters.roomSize, navParameters.dirtLocation);
    this.drivingInstructions = navParameters.drivingInstructions;
  }

  executeInstructions() {
    this.drivingInstructions.forEach((direction) => {
      this.hoover.move(direction);
    });
    return this.hoover.positionAndDirtCaught;
  }
};
