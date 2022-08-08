let studentName = [
  "labib",
  "sara",
  "samiya",
  "nadil",
  "sathi",
  "vabna",
  "sara",
  "hridoy",
  "nadil",
];

function getName(names) {
  let outPut = [];

  for (let i = 0; i < names.length; i++) {
    if (outPut.includes(names[i]) === false) {
      outPut.push(names[i]);
    }
  }
  return outPut;
}

let checkName = getName(studentName);

console.log(checkName);
