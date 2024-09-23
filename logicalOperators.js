// 100 Days Of Coding Challenge!

/* Day-58 Task: Read the following Articles and Code along with it:

Logical Operators in JavaScript
https://javascript.info/logical-operators

Nullish Coalescing Operator `??` in JavaScript
https://javascript.info/nullish-coalescing-operator */

//-----------------------------------------------------------------------------------------

// Logical Operators in JavaScript

// OR (||)
// The OR operator (||) returns the first truthy value among its operands.
// If all values are falsy, it returns the last operand.

// Example:

let a = 0 || 1; // 1 (0 is falsy, 1 is truthy)
let b = null || "Hello"; // "Hello" (null is falsy)
let c = undefined || 0 || false || "JavaScript"; // "JavaScript" (all others are falsy)

//-----------------------------------------------------------------------------------------

// AND (&&)
// The AND operator (&&) returns the first falsy value among its operands.
// If all values are truthy, it returns the last operand.

// Example:

let d = 1 && 2; // 2 (both are truthy, returns the last one)
let e = 0 && "Hello"; // 0 (0 is falsy)
let f = "JavaScript" && undefined && true; // undefined (first falsy value)

//------------------------------------------------------------------------------------------

// NOT (!)
// The NOT operator (!) converts the operand to a boolean and then negates it.

// Example:

let g = !true; // false
let h = !0; // true (0 is falsy, negated to true)
let o = !!"Hello"; // true (double negation, converts to boolean)
