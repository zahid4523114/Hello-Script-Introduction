function CheckOddSum(number) {
  //যেইটাকে হিসাব করা হবে সেইটা লুপ এর বাহিরে রাখতে হবে|তা না হলে বার বার SUM এর মান শূণ্য নিতে থাকবে|
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    // console.log(number[i]);
    let indexNum = i;
    sum += number[indexNum];
    // লুপ এর ভিতরে console করলে একের পর এক যোগ করে দেখাবে|
    // console.log(sum);
  }
  //যেইটাকে রিটার্ন করা হবে সেইটাও লুপ এর বাহিরে রাখতে হবে|তা না হলে একবার রিটার্ন করেই লুপ শেষ হয়ে যাবে|
  return sum;
}

//2nd function-start..

function CheckOddNumber(number) {
  let oddNumbers = [];
  for (let i = 0; i < number.length; i++) {
    let index = i;
    let indexElement = number[index];
    if (indexElement % 2 !== 0) {
      // console.log(indexElement);
      oddNumbers.push(indexElement);
    }
  }
  return oddNumbers;
}
let number = [10, 15, 20, 25, 30, 35, 40, 45, 50];

//2nd function return value..
let findOdd = CheckOddNumber(number);

console.log(findOdd);
//2nd function-end..

//1st function return value..
let doOddSum = CheckOddSum(findOdd);

console.log(doOddSum);
