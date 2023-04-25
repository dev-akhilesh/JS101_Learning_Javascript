// Equality and Inequality Operators


// Equality(==)

// Equality(==) operator checks if two values are same. The two operands can be of any type. If two operands are of different types, JavaScript converts both operands to same type and performs the equality check. Let us understand how == operator performs comparison.

// If both operands are of same type and if their values are same, then equality(==) operator returns true.

// If both operands are of different types, equality(==) operator applies a set of rules to determine equality.

// If one value is null and other undefined, they are equal.

console.log(null == undefined); // true
// If one value is number and other one a string, the string value is converted to number and then the comparison is performed.

console.log(3 == "3"); // true
// If either of the operands is true, it is converted to 1. If the operand is false, it is converted to 0. After that the comparison is performed.

console.log(true == 1); // true
console.log(true == "true"); // false
console.log(false == 0); // true
console.log(false == "false");
false;
// In the above example, note that when true is compared with "true", it retured false. In a relational operation, true and false are always converted to numbers.

// If either of the operands is an object and other operand is a number or string, the object is converted to a primitive type using valueOf() or toString() method of the object. Then the comparison takes place.
console.log([2, 4, 6] == "2,4,6"); // true
// Above statement is true because an array is converted to a string by joining its elements with comma(,).




// Strict Equality(===)

// Strict Equality(===) operator returns true only if the value and type of both operands are same.
console.log(3 === 3); // true
console.log(3 === "3"); // false



// Inequality(!=)

// Inequality operator(!=) returns true if both operands are not equal according to equality operator(==).
console.log(3 != 4); // true



// Strict Inequality(!==)

// Strict Inequality operator(!==) returns true if both operands are not equal according to strict equality operator(===).

console.log(3 !== "3"); // true