// program to check leap year

function checkLeapYear(year) {
  //three conditions to find out the leap year

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(year + ' ' + 'is a leap year');
  } else {
    alert(year + ' ' + 'is not a lear year');
  }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);
