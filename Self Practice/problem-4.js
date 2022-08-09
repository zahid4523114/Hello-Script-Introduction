//৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

let getFriends = [
  "syed noman",
  "noyon hasan",
  "kamrul islam",
  "shahadat Hosen Badhon",
  "shahin alam",
  "Md.shawon",
  "Rowel Rana",
];

function bestFriend(friends) {
  let outPut = friends[0];
  for (let i = 0; i < friends.length; i++) {
    let index = friends[i];
    if (index.length > outPut.length) {
      outPut = index;
    }
  }
  return outPut;
}

let checkFriends = bestFriend(getFriends);

console.log(checkFriends);
