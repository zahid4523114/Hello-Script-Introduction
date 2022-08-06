// // program to check leap year

// function checkLeapYear(year) {
//   //three conditions to find out the leap year

//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     alert(year + ' ' + 'is a leap year');
//   } else {
//     alert(year + ' ' + 'is not a lear year');
//   }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);

//Practice-leap year my practice.
console.log('----------Lear Year---------');

function checkYear(mainYear) {
  let leapYear1 = mainYear % 4;
  let leapYear2 = mainYear % 400;
  let leapYear3 = mainYear % 100;

  if ((leapYear1 === 0 && leapYear3 !== 0) || leapYear2 === 0) {
    return 'your year is a leap year..';
  } else {
    return 'your year is not a leap year..';
  }
}
let inputYear = 1930;

let outPut = checkYear(inputYear);

console.log(outPut);
