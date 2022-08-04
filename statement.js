let i = Math.trunc(Math.random() * 10) + 1;

if (i <= 10) console.log("hello world");

//২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

let moneyHave = 90000;

if (moneyHave > 80000) {
  console.log("I will buy a new Macbook");
} else if (moneyHave > 60000) {
  console.log("I will buy a gaming laptop");
} else if (moneyHave > 40000) {
  console.log("I will buy lenovo yoga");
} else if (moneyHave > 20000) {
  console.log("I will buy a used laptop");
} else {
  console.log("I use mobile phone");
}
