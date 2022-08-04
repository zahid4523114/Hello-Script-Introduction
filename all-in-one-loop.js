let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

console.log("EXAMPLE-25");

//২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
let i = 0;

while (i <= 39) {
  console.log("আজকে আমার মন ভালো নেই।");
  i++;
}

console.log("EXAMPLE-29");

//২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
let number = 58;

while (number <= 98) {
  console.log(number);
  number++;
}

console.log("EXAMPLE-30");

//৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও

let eventNumber = 412;

for (eventNumber; eventNumber <= 456; eventNumber += 2) {
  console.log(eventNumber);
}
console.log("EXAMPLE-31");
//৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও

let oddNumber = 581;

for (oddNumber; oddNumber <= 623; oddNumber += 2) {
  console.log(oddNumber);
}
console.log("EXAMPLE-33");
//৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

let courseElement = ["Html", "Css", "Bootstrap", "Tailwind", "Javascript"];

for (let i = 0; i < courseElement.length; i++) {
  console.log(courseElement[i]);
}
console.log("EXAMPLE-34");
//৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও|

let startingPoint = 0;
let usedPhone = ["Maximus", "Nokia", "Symphony", "Infinix"];

while (startingPoint < usedPhone.length) {
  console.log(usedPhone[startingPoint]);
  startingPoint++;
}

console.log("EXAMPLE-35");

//৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
for (let givenNumber = 30; givenNumber <= 86; givenNumber++) {
  if (givenNumber === 44) {
    break;
  }
  console.log(givenNumber);
}

console.log("EXAMPLE-36");

//৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।
let booksNumber = 0;
let booksPrice = [50, 100, 150, 180, 250, 400, 600, 1000];

for (booksNumber; booksNumber < booksPrice.length; booksNumber++) {
  if (booksPrice[booksNumber] > 200) {
    continue;
  }
  console.log(booksPrice[booksNumber]);
}
