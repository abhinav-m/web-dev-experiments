document.querySelector('div#root').addEventListener('click', function(e) {
  console.log('DIV -> root');
});

document.querySelector('div#root div').addEventListener('click', function(e) {
  console.log('DIV#root div');
});

// document.querySelector('ul').onclick = function(e) {
//   console.log(e.target + '1');
// };

// document.querySelector('ul').onclick = function(e) {
//   console.log(e.target + '2');
// };

document.querySelector('ul').addEventListener('click', function(e) {
  e.stopPropagation();
  console.log(e.target.innerText + ' 1st');
});

document.querySelector('ul').addEventListener('click', function(e) {
  e.stopImmediatePropagation();
  console.log(e.target.innerText + ' 2nd ');
});

var testNode = document.createElement('li');
testNode.innerText = 'Inserted dynamically';
document.querySelector('ul').appendChild(testNode);
