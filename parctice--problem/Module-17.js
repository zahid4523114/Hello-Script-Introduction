//Problem-1
let fruits = ['Apple', 'Banana', 'Orange'];
//replacing or adding data..
fruits[1] = 'Mango';
//removing data from last position..
fruits.pop();
//adding data to the last position..
fruits.push('Watermelon');
console.log(fruits);

//Problem-2
let myScore = 85;
let tom = 66;
let jane = 95;
let peter = 56;
let john = 40;
//my score
if (myScore >= 80) {
  console.log('I got A grade');
} else if (myScore >= 60) {
  console.log('I got B grade');
} else if (myScore >= 50) {
  console.log('I got C grade');
} else if (myScore >= 40) {
  console.log('I got D grade');
} else {
  ('you got F ');
}
// tom's number
if (tom >= 60) {
  console.log('Tom got B grade');
} else if (tom >= 60) {
  console.log('I got B grade');
} else if (tom >= 50) {
  console.log('I got C grade');
} else if (tom >= 40) {
  console.log('I got D grade');
} else {
  ('you got F ');
}
// jane's number
if (jane >= 80) {
  console.log('Jane got A grade');
} else if (jane >= 60) {
  console.log('I got B grade');
} else if (jane >= 50) {
  console.log('I got C grade');
} else if (jane >= 40) {
  console.log('I got D grade');
} else {
  ('you got F ');
}
// peter's number
if (peter >= 50) {
  console.log('Peter got C grade');
} else if (peter >= 60) {
  console.log('I got B grade');
} else if (peter >= 50) {
  console.log('I got C grade');
} else if (peter >= 40) {
  console.log('I got D grade');
} else {
  ('you got F ');
}
// john's number
if (john >= 40) {
  console.log('John got D grade');
} else if (john >= 60) {
  console.log('I got B grade');
} else if (john >= 50) {
  console.log('I got C grade');
} else if (john >= 40) {
  console.log('I got D grade');
} else {
  ('you got F ');
}

//Problem-3
let num1 = 13;
let num2 = 79;
let num3 = 45;

if (num1 >= num2 && num1 >= num3) {
  console.log('Number-1 is the largest number..');
} else if (num2 >= num1 && num2 >= num3) {
  console.log('Number-2 is the largest number..');
} else {
  console.log('Number-3 is the largest number..');
}
