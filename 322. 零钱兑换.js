/**
 * Created by Administrator on 2018/5/25.
 */
/**给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1。
 *
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3
 * 解释: 11 = 5 + 5 + 1
 *
 * 输入: coins = [2], amount = 3
 * 输出: -1
 */

/**问题分为
 *  1. 能否凑出目标数字
 *  2. 凑出目标数字，最少需要多少个硬币
 * n种面额的硬币就是一个n维数组（可以优化为 n-1 维）
 * 用来记录用i个硬币时所有可能出现的结果
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;

  let total = 0;
  let n = coins.length;
  let dp = [];


  function count(total, n) {
    if (total > amount) return -1;
    if (total === amount) return n;

    if (total < amount) {
      for (let i = 0, len = coins.length; i < len; i++) {

        console.log(total, n, i)
        count(total + coins[i], n++)
      }

    }
  }

  count(0, 0)
};

// console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([186, 419, 83, 408], 6249))