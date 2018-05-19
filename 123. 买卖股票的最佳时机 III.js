/**
 * Created by admin on 2018/5/19.
 */
/**给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 * 输入: [3,3,5,0,0,3,1,4]
 * 输出: 6
 * 第4天买入，第6天卖出，第7天买入，第8天卖出
 */

/**最容易想到的思路，将数组打断成2部分，分别求这2段的最大利润，即第一题的思路了
 * 1到i遍历一次，得到0到i位置为结尾的最大利润
 * i到2遍历一次，算出以此位置为开始，到整个结束时的最大利润，
 * 两者之和最大值为所求
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;
  if (prices.length === 2) return Math.max(0, prices[1] - prices[0]);

  let len = prices.length;
  let profits = [0];
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < len; i++) {
    profit = Math.max(profit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
    profits[i] = profit;
  }

  console.log(profits)
  let maxPrice = prices[len - 1];
  let maxPro = 0;

  let prof = [];
  profit = 0;
  for (let i = len - 1; i > 1; i--) {
    profit = Math.max(profit, maxPrice - prices[i]);
    prof.unshift(profit)
    maxPrice = Math.max(maxPrice, prices[i]);
    maxPro = Math.max(maxPro, profit + profits[i])
  }

  console.log(prof)
  return maxPro;
};


// let prices = [7, 1, 5, 3, 6, 4, 8, 2, 6];
let prices = [1, 2, 3, 4, 5];

console.log(maxProfit(prices))