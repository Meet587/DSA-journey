function maxProfit(prices: number[]): number {
  /*
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        const buy = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            profit = Math.max(profit, prices[j] - buy);
        }
    }
    return profit;
    */

  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
}
