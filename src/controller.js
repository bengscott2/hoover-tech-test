module.exports = class Controller {
  constructor(navParameters, hoover) {
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
