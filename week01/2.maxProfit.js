var maxProfit = function (prices) {
  let maxprofit = 0;
  let minSofar = prices[0];
  for (let i = 0; i < prices.length; i++) {
    minSofar = Math.min(prices[i], minSofar);
    let profit = prices[i] - minSofar;
    maxprofit = Math.max(maxprofit, profit);
  }
  return maxprofit;
};
