const Person = require('./person.js');

class Elevator {
  constructor () {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = '';
  }

  start () {
    this.myStart = setInterval(() => this.update(), 1000);
  }
  stop () {
    clearInterval(this.myStart);
  }
  update () {
    if (this.direction === 'up') {
      this.floorUp();
    } else {
      this.floorDown();
    }
    this.log();
  }
  _passengersEnter () { }
  _passengersLeave () { }
  floorUp () {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    }
  }
  floorDown () {
    if (this.floor > 0) {
      this.floor--;
    }
  }
  call () {
    this.passenger = new Person(this.name, this.originFloor, this.destinationFloor);
    this.requests.push(this.passenger);
  }
  log () {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
