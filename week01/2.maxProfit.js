var maxProfit = function (prices) {
  for (let i = 0; i < prices.length; i++) {
    console.log("i", prices[i]);
    for (let j = 0; j < prices.length; j++) {
      console.log("j", prices[j]);
    }
  }
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
// console.log(maxProfit([1, 2]));
console.log(maxProfit([2, 4, 1]));
