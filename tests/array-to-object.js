//Converting an array of objects into a single object.

var arr_1 = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }];

//ES5
// for (let i = 0; i < arr_1.length; i++) {
//   let curObj = arr_1[i];
//   result[curObj.key] = arr_1[i];
// }

// console.log(result);

//Converting an array of objects into a single object
//ES6
var mapped = arr_1.map(v => ({ [v.key]: v }));
console.log(mapped);

var result = Object.assign({}, ...mapped);
console.log(result);

function test(a, b, ...c) {
  console.log(c);
  console.log(a + b + c);
}

test('1', '2', [3, 4, 5, 6], 7, 8, 9);
