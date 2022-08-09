//১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 80) {
    continue;
  }
  console.log(numbers[i]);
}
