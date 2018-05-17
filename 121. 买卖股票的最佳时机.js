/**
 * Created by admin on 2018/5/17.
 */
/**给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 注意你不能在买入股票前卖出股票。
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let maximum = 0;
  let minPrice = prices[0];

  for (let i = 1, len = prices.length; i < len; i++) {
    minPrice = Math.min(prices[i - 1], minPrice);
    maximum = Math.max(maximum, prices[i] - minPrice);
  }

  return maximum;
};

// let prices = [7, 1, 5, 3, 6, 4, 10];
let prices = [7,6,4,3,1];

console.log(maxProfit(prices))