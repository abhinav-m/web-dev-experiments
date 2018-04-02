//Spread operator used as rest parameter
function test(a, b, ...c) {
  console.log(c); // C is an array with the rest of the arguments passed to the function
  console.log(a + b + c);
}

//Not possible, object must be iterable.
// let a = { a: 2, b: 4, c: 6 };
// let b = [...a];
console.log(b);

//Spread operator to concat two arrays.
let a = [1, 23, 4, 5];
let b = [6, 7, 8, 9];
let c = [...a, ...b];
console.log(c);
test('1', '2', [3, 4, 5, 6], 7, 8, 9);
