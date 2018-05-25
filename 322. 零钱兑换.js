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

/**从0开始递推，dp[i]表示为，凑出数字i，需要的最少硬币数量
 * 这样就建立了符合题意的递推关系
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  let dp = [0];

  for (let i = 1; i <= amount; i++) {
    if (!dp[i]) dp[i] = amount + 1;
    for (let j = 0, len = coins.length; j < len; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  console.log(dp[amount])
  return dp[amount] > amount ? -1 : dp[amount];
};

// console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([186, 419, 83], 83 + 186 + 419))