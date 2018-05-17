/**
 * Created by Administrator on 2018/5/17.
 */
/**数组的每个索引做为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。
 * 每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。
 * 您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。
 *
 * 输入: cost = [10, 15, 20]
 * 输出: 15
 * 解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
 *
 * 输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * 输出: 6
 * 解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。
 *
 * cost 的长度将会在 [2, 1000]。
 * 每一个 cost[i] 将会是一个Integer类型，范围为 [0, 999]。
 */

/**定义一个dp数组，dp[i]表示到达第i层最小的花费，则dp[i]仅仅与 dp[i-1]和dp[i-2]及cost[i]相关
 *
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {

  let dp = [cost[0], cost[1]];

  for (let i = 2, len = cost.length; i <= len; i++) {
    dp[i] = i === len ? Math.min(dp[i-1], dp[i-2]) : Math.min(dp[i-1], dp[i-2]) + cost[i];

  }
  return dp.pop();
};

// let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
let cost = [10, 15, 20]

console.log(minCostClimbingStairs(cost))