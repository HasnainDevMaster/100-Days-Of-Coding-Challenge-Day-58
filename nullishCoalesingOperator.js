// 100 Days Of Coding Challenge!

/* Day-58 Task: Read the following Articles and Code along with it:

Logical Operators in JavaScript
https://javascript.info/logical-operators

Nullish Coalescing Operator `??` in JavaScript
https://javascript.info/nullish-coalescing-operator */

//-------------------------------------------------------------------

/* Nullish Coalescing Operator (??)
The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined.
It is useful for providing default values.*/

// Example:

let j = null ?? "default"; // "default" (null is nullish)
let k = undefined ?? "default"; // "default" (undefined is nullish)
let c = "" ?? "default"; // "" (empty string is not nullish)
let d = 0 ?? 42; // 0 (0 is not nullish)

/* Comparison with ||
The || operator returns the right-hand operand if the left-hand operand is any falsy value (not just null or undefined).*/

// Example:

let l = 0 || "default"; // "default" (0 is falsy)
let m = "" || "default"; // "default" (empty string is falsy)

/* Precedence
The nullish coalescing operator (??) has a lower precedence than most other operators,
but higher than the conditional (ternary) operator.*/

// Example:

let n = (null ?? 1) || 2; // 1 (nullish coalescing first, then OR)
let p = (null || undefined) ?? "default"; // "default" (parentheses change precedence)*/
