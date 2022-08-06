//Problem-1

function bar() {
  console.log('bar');
}
bar();

function foo() {
  console.log('foo');
  bar();
}
foo();

//Problem-2

function make_avg(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let average = sum / 3;
  return average;
}

let getAverage = make_avg(80, 40, 66);
console.log(getAverage);

//Problem-3

function make_avg2(numbers) {
  let sum = 0;
  let avg;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    avg = sum / 6;
  }
  return parseFloat(avg.toFixed(2));
}
let getArray = [56, 89, 39, 65, 23, 98];
let CheckAvg = make_avg2(getArray);
console.log(CheckAvg);

//problem-4
//No return + Has parameter.
console.log('-----------No return + Has parameter.----------');

function odd_even(number) {
  let getOddEven = number % 2;
  if (getOddEven === 0) {
    console.log('the number is odd..');
  } else {
    console.log('the number is even..');
  }
}
odd_even(456);

//Has return + Has parameter.
console.log('-----------Has return + Has parameter.----------');

function odd_even2(number2) {
  let getOddEven2 = number2 % 2;
  if (getOddEven2 === 0) {
    return 'the number is odd..';
  } else {
    return 'the number is even..';
  }
}
let getNum = odd_even2(457);
console.log(getNum);

//Problem-5
console.log('-----------signal for road crossing.----------');
let signal = 'red';
switch (signal) {
  case 'red':
    console.log('if you try to cross the road, you may be in danger');
    break;
  case 'green':
    console.log('you should cross the road');
    break;
  case 'yellow':
    console.log('you should stop.');
    break;
  default:
    console.log('stop! wait for signal');
}
