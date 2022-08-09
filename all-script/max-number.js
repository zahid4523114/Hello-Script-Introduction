let getHeights = [167, 190, 120, 165, 137];

function maxNumber(height) {
  let putHeight;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > height[0]) {
      putHeight = height[i];
    }
  }
  return putHeight;
}
let checkHeight = maxNumber(getHeights);
console.log(checkHeight);

//
// function maxHeight(number) {
//   for (let i = 0; i < number.length; i++) {
//     if (Math.max(number[i]) > number[0]) {
//       console.log(number[i]);
//     }
//   }
// }

// let allHeights = [167, 190, 120, 165, 137];
// maxHeight(allHeights);
