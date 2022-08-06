//Practice-1
console.log('----------Inch to Feet----------');

function height(_inches) {
  let inchToFeet = personHeight / 12;

  return parseFloat(inchToFeet.toFixed(1));
}
let personHeight = 71;

let fullHeight = height(personHeight);

console.log('Feet:', fullHeight, 'inch');

//Practice-2
console.log('----------Meter to Centimeter----------');

function length(meter) {
  let centiMeter = meter * 100;

  return centiMeter;
}
let lengthInMeter = 10;

let fullLength = length(lengthInMeter);

console.log(fullLength, 'centimeter');
