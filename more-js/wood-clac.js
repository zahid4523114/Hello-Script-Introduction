function woodCalc(woodAmount) {
  let tkForTable = 50;
  let tkForChair = 30;
  let tkForBed = 100;

  let table = tkForTable * woodAmount;
  let chair = tkForChair * woodAmount;
  let bed = tkForBed * woodAmount;

  let totalAmount = table + chair + bed;

  return totalAmount;
}
let getAmount = woodCalc(12, 8, 20);

console.log(getAmount);
