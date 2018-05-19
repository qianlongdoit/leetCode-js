/**
 * Created by admin on 2018/5/19.
 */
/**给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 *
 * 输入: [1,2,3,4,5]
 * 输出: 4
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 */

/**遍历整个数组，
 * 遇到股票下跌，在最低点买入股票
 * 遇到股票下跌开始抛售股票，最大最小变为抛售后一天的股票价格
 * 遇到股票递增则一直持有
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let maxPrice = prices[0];
  let minPrice = prices[0];
  let notBuy = true;
  let totalProfit = 0;

  for (let i = 0, len = prices.length; i < len; i++) {

    if (notBuy) {
      if (prices[i + 1] && prices[i] <= prices[i + 1]) {
        minPrice = prices[i]
        console.log(`第${i}天,买入股票${minPrice}`);
        notBuy = false;
      }

    } else {

      if (prices[i] >= prices[i + 1] || i === len - 1) {
        maxPrice = prices[i];
        console.log(`第${i}天,卖出股票${maxPrice}`)
        totalProfit = totalProfit + (maxPrice - minPrice);
        notBuy = true;

      }
    }

  }

  return totalProfit;
};

// let prices = [7, 1, 5, 3, 6, 4]
// let prices = [1, 2, 3, 4, 5]
let prices = [7, 6, 4, 3, 1]

console.log(maxProfit(prices));