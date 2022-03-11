'use strict';
/* 
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bobo = new Person('bobo', 1998);
console.log(bobo);

// 1. New {Empty object} is created
// 2. function is called, this == {Empty object}
// 3. {} linked to prototype
// 4. function automatically return {}

const hyeon = new Person('Hyeon', 1998);
console.log(hyeon);

console.log(bobo instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

bobo.calcAge();
hyeon.calcAge();

console.log(Person.prototype.isPrototypeOf(bobo)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototypeOfLinkeedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(bobo);

console.log(bobo.hasOwnProperty('firstName'));
console.log(bobo.hasOwnProperty('species'));

console.log(bobo.__proto__);
console.log(bobo.__proto__.__proto__);
console.log(bobo.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [2, 6, 3, 6, 2, 3, 4];
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
 */
/* 
///////////////////////////////////////////
// Coding Challenge #1
// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// 2.
Car.prototype.accerate = function () {
  this.speed += 10;
  console.log(`${this.make} acclerated to ${this.speed}km/h`);
};
// 3.
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} decreased speed to ${this.speed}km/h`);
};
// 4.
const bmw = new Car('bmw', 120);
const mercedes = new Car('mercedes', 95);

bmw.accerate();
bmw.accerate();
bmw.brake();
bmw.brake();

mercedes.accerate();
mercedes.accerate();
mercedes.brake();
mercedes.brake();
 */
/* 
// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const bobo = new PersonCl('bobo', 1998);
console.log(bobo);
bobo.calcAge();

console.log(bobo.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
bobo.greet();

// 1. Classes are Not hoisted ( function declarations are hoisted )
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode 
*/
/* 
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hello() {
    console.log('hello!');
  }
}

///////////////////////////////////////////
// Static method
const bobo = new PersonCl('bobo kim', 1998);
console.log(bobo);

PersonCl.hey = function () {
  console.log('Hey there!');
};

PersonCl.hey();
PersonCl.hello();

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1998);
sarah.calcAge();

///////////////////////////////////////////
// #Coding challenge #2

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accerate() {
    this.speed += 10;
    console.log(`${this.make} acclerated to ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} decreased speed to ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.speedUS = 75;
console.log(ford);
 */
/* 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2002, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.log(mike);
 */
/* 
///////////////////////////////////////////
// Coding challenge #3
// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
// Link the prototypes
Ev.prototype = Object.create(Car.prototype);

// 2.
Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3.
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};
Ev.prototype.brake = function () {
  this.speed -= 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new Ev('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.chargeBattery(50);
tesla.brake();
 */
/* 
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  static hey() {
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2021 - this.birthYear
      } years old, but as a student I feel more like ${
        2021 - this.birthYear + 10
      }`
    );
  }
}

const bobo = new StudentCl('BoBo', 1998, 'Computer Science');
bobo.introduce();
bobo.calcAge();
 */
/* 
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('bobo', 1998, 'Computer Science');
jay.introduce();
jay.calcAge();
 */
/* 
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }
  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    }
    return this;
  }
  // 4) Private methods (instances)

  _approveLoan(value) {
    return true;
  }
}
const acc1 = new Account('BoBo', 'Won', 1111);
console.log(acc1);
acc1.requestLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);

console.log(acc1.getMovements());
console.log(acc1.requestLoan(100));

// Chaining
acc1.deposit(300).deposit(300).withdraw(500).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
 */
///////////////////////////////////////////
// Coding challenge #4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} decreased speed to ${this.speed}km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 20);
rivian.accelerate().accelerate().brake().brake().chargeBattery(43).accelerate();
console.log(rivian.speedUS);
