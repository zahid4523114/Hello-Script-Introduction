function CheckArraySum(number) {
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
let arrayNumber = [30, 10, 30, 50, 54, 70, 98];
let arraySum = CheckArraySum(arrayNumber);
console.log(arraySum);
