let phones = [
  {
    name: 'iphone',
    price: 146999.0,
    Released: '2020, October 23',
    OS: 'iOS 14.1, up to iOS 14.2',
    Display: '6.1" 1170x2532 pixels',
    Camera: '12MP 2160p',
    RAM: ' 6GB RAM Apple A14 Bionic',
    Battery: '2815mAh Li-Ion',
  },
  {
    name: 'samsung',
    price: 35000,
    Released: '2020, October 23',
    OS: 'exynos',
    Display: '6.1" 1170x2532 pixels',
    Camera: '12MP 2160p',
    RAM: ' 6GB RAM ',
    Battery: '2815mAh Li-Ion',
  },
  {
    name: 'xiaoumi',
    price: 20000,
    Released: '2020, October 23',
    OS: 'iOS 14.1, up to iOS 14.2',
    Display: '6.1" 1170x2532 pixels',
    Camera: '12MP 2160p',
    RAM: ' 6GB RAM Apple A14 Bionic',
    Battery: '2815mAh Li-Ion',
  },
  {
    name: 'vivo',
    price: 14000,
    Released: '2020, October 23',
    OS: 'iOS 14.1, up to iOS 14.2',
    Display: '6.1" 1170x2532 pixels',
    Camera: '12MP 2160p',
    RAM: ' 6GB RAM Apple A14 Bionic',
    Battery: '2815mAh Li-Ion',
  },
];

function checkLowest(phone) {
  let checkPhone = [];
  for (let i = 0; i < phone.length; i++) {
    let indexOfPhone = phone[i];
    if (indexOfPhone.price < phone[0].price) {
      checkPhone = indexOfPhone;
    }
  }
  return checkPhone;
}
let getPhone = checkLowest(phones);

console.log(getPhone);
