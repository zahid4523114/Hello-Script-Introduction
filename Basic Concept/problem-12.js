//১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।
let selfInfo = {
  firstName: "Dewan Mohammod",
  lastName: "Zahid Hasan",
  age: 22,
  profession: "Student",
  job: "",
};
selfInfo.job = "Teacher";
selfInfo["location"] = "Mogolpara";

console.log(selfInfo);
