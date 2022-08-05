function oddNumber(number) {
  let oddCalc = number % 2;

  if (oddCalc === 0) {
    return true;
  } else {
    return false;
  }
}
let addOdd = 260;

let oddInit = oddNumber(addOdd);

console.log(oddInit);
