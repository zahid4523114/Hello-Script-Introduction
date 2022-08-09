//৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

//এইবার ভালো করে খেয়াল করো।

//প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

//সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

//তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

//এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

function paperRequirements(bookList1, bookList2, bookList3) {
  const pageOfBook1 = 100;
  const pageOfBook2 = 200;
  const pageOfBook3 = 300;

  let firstBook = pageOfBook1 * bookList1;

  let secondBook = pageOfBook2 * bookList2;

  let thirdBook = pageOfBook3 * bookList3;

  let totalPages = firstBook + secondBook + thirdBook;

  return totalPages;
}

let checkBookList = paperRequirements(0, 0, 7);

console.log("Total page of books:", checkBookList, "pages");
