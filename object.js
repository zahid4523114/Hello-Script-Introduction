let selfInfo = {
  firstName: 'Dewan Mohammod',
  lastName: 'Zahid Hasan',
  age: 2022 - 2002,
  profession: 'Student',
  job: 'Teacher',
};

//adding key/property value to the object.

//Method-1 dot notation.
selfInfo.location = 'Ghatail,Tangail';

//Method-2 bracket notation.
selfInfo['Madrasha'] = 'Brammanshashon';

//showing the whole object in the log...
console.log('----showing the whole object in the log...----');

console.log(selfInfo);

//showing the specific key/property in the log..
console.log('----showing the specific key/property in the log..----');

//Method-1 dot notation.
console.log(selfInfo.firstName);

//Method-2 bracket notation.
console.log(selfInfo['lastName']);

//-------------------------------------------

//showing only keys/property in the log..
console.log('----showing only keys/property in the log----');

let onlyKeys = Object.keys(selfInfo);

console.log(onlyKeys);

//showing only key/property values in the log..
console.log('----showing only key/property values in the log----');

let onlyValues = Object.values(selfInfo);

console.log(onlyValues);
