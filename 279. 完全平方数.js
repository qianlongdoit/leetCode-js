/**
 * Created by admin on 2018/5/27.
 */
/**给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。
 * 你需要让组成和的完全平方数的个数最少。
 *
 * 输入: n = 12
 * 输出: 3
 * 解释: 12 = 4 + 4 + 4.
 *
 * 输入: n = 13
 * 输出: 2
 * 解释: 13 = 4 + 9.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    if (!dp[i]) dp[i] = i;

    if (Math.sqrt(i) === ~~Math.sqrt(i)) {
      dp[i] = 1;
      continue;
    }
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);

    }
  }

  console.log(dp)
  return dp[n];
};

numSquares(99)