let shoppingCart = [
  { name: 'jubba', price: 1500 },
  { name: 'payjama', price: 300 },
  { name: 'cap', price: 400 },
  { name: 'watch', price: 500 },
  { name: 'ator', price: 100 },
  { name: 'miswak', price: 20 },
  { name: 'shorma', price: 150 },
];

function shoopingTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    let index = prices[i];
    total += index.price;
  }
  return total;
}

let getTotal = shoopingTotal(shoppingCart);

console.log(getTotal);
