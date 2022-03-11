'use strict';
// Coding challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
/* 
/////////////////////////////////////////////////
// Closures
const sucureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = sucureBooking();
// A function has access to the variable environment (VE) of the execution context in which it was created
// Closure: VE attached to the functio, axactly as it was at the time and place the function was created
// A closure gives a function access to all the variables of its paraent function, even after that parent function
// has freturend. The funciton keeps a reference to its outer, which preserves the scpe chain throughout time
// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place;
// A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
// A closure is NOT a tangible JavaScript object
booker();
booker();
booker();

console.dir(booker);

// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
 */
/* 
/////////////////////////////////////////////////
// IIFE  ==>  Immediately Invoked Function Expression
const runOnce = function () {
  console.log('THis will never run again');
};
runOnce();

// IIFE  ==>  Immediately Invoked Function Expression
(function () {
  console.log('THis will never run again');
  const isPrivate = 23;
})();

(() => console.log('THis will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);
 */
/* 
/////////////////////////////////////////////////
// Coding challenge #1
const poll = {
  question: 'What is your favorite programming language',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0,0,0,0]. More in the next sections
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // let option = '';
    // for (const lang of this.options) option += lang + '\n';
    // option += '(Write option number)';
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // console.log(
    //   typeof answer === 'number' && answer < this.answers.length && answer >= 0
    // );

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      answer >= 0 &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
    else if (type === 'array') console.log(this.answers);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
 */
/* 
///////////////////////////////////////////////////
// The call and apply methods
const lufthansa = {
  airline: 'Lufthanse',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Bo Hyeon Kim');
lufthansa.book(635, 'DOllosle');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
// Does Not work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

///////////////////////////////////////////////////
// The bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven WIlliams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Bo Hyeon');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value* 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));
 */
/* 
///////////////////////////////////////////////////
// Function returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Kim');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Kim');
 */
/* 
///////////////////////////////////////////////////
// Functions Returning Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...second] = str.split(' ');
  return [first.toUpperCase(), ...second].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// We do not call the functions ourselves, but instead we tell javascript to basically call them later 💕💕
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('😂');
};
// JS uses callbacks all the time
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
 */
///////////////////////////////////////////////////
// First-Class VS Higher-order Functions
/*
const greet = () => console.log('Hey Bohyeon');
btnClose.addEventListener('click', greet);

addEventListener --> Higher-order function
because it receives another function as an input.

greet --> callback function
the function that passed in is called call-back function
because call-back function will be called by higher order function
*/

/*
///////////////////////////////////////////////////
// How passing arguments works: Value vs Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23434251232,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23434251232) alert('Checked in');
  else alert('Wrong passport!');
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassPort = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassPort(jonas); // Call by reference (passing reference) but there is no reference in javascript
checkIn(flight, jonas);
*/

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/
