//১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
function multiplication(number) {
  for (let i = 1; i <= number; i++) {
    let getNumber = i * number;
    console.log(getNumber);
  }
}
multiplication(13);

//২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function case_conversion(name) {
  let getname = name.toUpperCase();
  return getname;
}
let checkName = case_conversion('dewan mohammod zahid hasan');

console.log(checkName);

//৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

function fullName(firstName, lastName) {
  let userName = firstName.concat(' ', lastName);
  return userName;
}
let getFullName = fullName('Dewan Mohammod', 'Zahid Hasan');

console.log(getFullName);

//৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

function squareNumber(number) {
  let getSquare = number ** 2;
  return getSquare;
}
let checkSquare = squareNumber(12);

console.log(checkSquare);

//৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা|
let pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2,
};
console.log(pizza.toppings[2]);
