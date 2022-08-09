//৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

let developerElements = ["Html", "Css", "Javascript", "Bootstrap", "Bulma"];
//চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে
developerElements[4] = "Tailwind";
//array এর মধ্যে দুইটা উপাদান যোগ করতে হবে
developerElements.push("Javascript", "Node.js", "MongoDB");
//একটা উপাদান কে বের করে দিতে হবে
developerElements.pop();
// কয়টা উপাদান আছে সেটা বের করবে হবে
let elements = developerElements.length;

console.log(elements, developerElements);
