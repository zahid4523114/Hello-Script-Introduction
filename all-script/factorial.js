//forward loop...
function factorial_1(number) {
  //ফেক্টোরিয়াল result or i এর মান 0 সেট করলে শূণ্য রিটার্ন করবে|তাই মান নিতে হবে 1|
  let result = 1;
  for (let i = 1; i <= number; i++) {
    //short hand..
    result *= i;
    //full hand..
    // result = result * i;
  }
  return result;
}
let factNumber = 8;
let getFactorial = factorial_1(factNumber);
console.log(getFactorial);

//backward loop..
console.log('---------backward loop---------');
function factorial_2(number2) {
  let getResult = 1;
  for (let i = number2; i >= 1; i--) {
    getResult *= i;
  }
  return getResult;
}
let getNumber = 6;
let getFactorialNumber = factorial_2(getNumber);
console.log(getFactorialNumber);
