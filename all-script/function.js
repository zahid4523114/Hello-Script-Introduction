console.log('----------Practice-1----------');
function bar() {
  console.log('bar');
}
bar();

function foo() {
  console.log('foo');
  bar();
}
foo();
//practice-2
console.log('----------Practice-2----------');
function make_avg() {
  let num1 = 55;

  let num2 = 25;

  let num3 = 99;

  let sum = num1 + num2 + num3;

  let average = sum / 3;

  return average;
}

let averageNumber = make_avg();

let fixedValue = parseFloat(averageNumber.toFixed(2));

console.log(fixedValue);

//Practice-3
console.log('----------Practice-3----------');
