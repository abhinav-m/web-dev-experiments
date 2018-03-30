// // let reversed = [];
// // 'abhinav'.split('').forEach(v => {
// //   console.log(v)
// //   reversed.unshift(v)
// // });
// // console.log(reversed.join(''))

function solve(n) {
  const mult = 11 * 101 * 73 * 137;
  const rem = n;
  let ans = mult - rem / Math.pow(10, 7);
  return ans;
}

console.log((2345432 * 11 * 101 * 73 * 137) % Math.pow(10, 7));

// let length = 5;
// let string = 'ababa';
//
// isPalindrome(a) {
//   return a.split('').reverse().join('') === a
// }

// var longestPalindrome = function(string) {

//   var length = string.length;
//   var result = "";

//   var centeredPalindrome = function(left, right) {
//     while (left >= 0 && right < length && string[left] === string[right]) {
//       //expand in each direction.
//       left--;
//       right++;
//     }

//     return string.slice(left + 1, right);
//   };

//   for (var i = 0; i < length - 1; i++) {
//     var oddPal = centeredPalindrome(i, i + 1);

//     var evenPal = centeredPalindrome(i, i);

//     if (oddPal.length > 1)
//       console.log("oddPal: " + oddPal);
//     if (evenPal.length > 1)
//       console.log("evenPal: " + evenPal);

//     if (oddPal.length > result.length)
//       result = oddPal;
//     if (evenPal.length > result.length)
//       result = evenPal;
//   }
//   return "the palindrome is: " + result + " and it's length is: " + result.length;
// }

// console.log(longestPalindrome("ababa"))
