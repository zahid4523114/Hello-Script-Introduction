//৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

let num1 = 44;

let num2 = 56;

let smallerThen = num1 < num2;

let greaterThen = num2 > num1;

let equalTo = num1 == num2;

let notEqualTo = num1 !== num2;

let lesEqual = num1 <= num2;

let greatEqual = num2 >= num1;

console.log(
  smallerThen,
  greaterThen,
  equalTo,
  notEqualTo,
  lesEqual,
  greatEqual
);
