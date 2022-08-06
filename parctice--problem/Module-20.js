//Problem-1

function hour_to_minutes(hour) {
  let getHour = hour * 60;
  return getHour;
}
let putHour = 15;
let checkHour = hour_to_minutes(putHour);
console.log(checkHour, 'minutes');

//Problem-2

function findLeapYear(years) {
  let updatedYear = [];
  for (let i = 0; i < years.length; i++) {
    let checkYear = 4;
    let calcYear = years[i] % checkYear;
    if (calcYear === 0) {
      updatedYear.push(years[i]);
    }
  }
  return updatedYear;
}
let getYears = [2023, 2024, 2025, 2028, 2030];
let getLeapYear = findLeapYear(getYears);
console.log(getLeapYear);

//Problem-3

function find_odd_num(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let getOdd = numbers[i] % 2;
    if (getOdd !== 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
let setNumbers = [5, 7, 8, 10, 45, 30];
let checkOdd = find_odd_num(setNumbers);
console.log(checkOdd);
