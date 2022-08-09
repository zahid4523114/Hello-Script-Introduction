function ticketPrice(amount) {
  const first100ticket = 100;
  const second100ticket = 90;
  const restTicket = 70;

  if (amount <= 100) {
    let price1 = first100ticket * amount;
    return price1;
  } else if (amount <= 200) {
    let first100Price = 100 * first100ticket;
    let remainingAmount = amount - 100;
    let remainingPrice = remainingAmount * second100ticket;
    let price2Total = first100Price + remainingPrice;
    return price2Total;
  } else {
    let first100Price = 100 * first100ticket;
    let second100Price = 100 * second100ticket;
    let remainingTicket = amount - 200;
    let remainingPrice = remainingTicket * restTicket;
    let price3Total = first100Price + second100Price + remainingPrice;
    return price3Total;
  }
}
let getTicket = ticketPrice(30);
console.log(getTicket);
