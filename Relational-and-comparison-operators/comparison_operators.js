const a = 5, b = 2, c = 'hello';

// equal to operator
console.log(a == 5);     // true
console.log(b == '2');   // true
console.log(c == 'Hello');  // false

// -----------------------------------------------------

const a = 3, b = 'hello';

// not equal operator
console.log(a != 2); // true
console.log(b != 'Hello'); // true

// -----------------------------------------------------

const a = 2;

// strict equal operator
console.log(a === 2); // true
console.log(a === '2'); // false


// -----------------------------------------------------

const a = 2, b = 'hello';

// strict not equal operator
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(b !== 'Hello'); // true


// -----------------------------------------------------

const a = 3;

// greater than operator
console.log(a > 2); // true

// -----------------------------------------------------

const a = 3;

// greater than or equal operator
console.log(a >= 3); //true

// -----------------------------------------------------

const a = 3, b = 2;

// less than operator
console.log(a < 2); // false
console.log(b < 3); // true

// -----------------------------------------------------

const a = 2;

// less than or equal operator
console.log(a <= 3) // true
console.log(a <= 2); // true
