/**
 * Created by admin on 2018/5/25.
 */
/**给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * 例如，给定 n = 2，返回1（2 = 1 + 1）；给定 n = 10，返回36（10 = 3 + 3 + 4）。
 * 注意：你可以假设 n 不小于2且不大于58。
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    dp[i] = -1;
    for (let j = 1; j < i; j++) {
      //注意，f[i]的最大值是由至少两个数的乘积组成的，但是他本身i这个值在比i大的数的乘积中，
      //也可以单独作为一个因子出现，所以要加上跟这种情况的比较，即(i - j) * j
      dp[i] = Math.max(dp[i], Math.max(dp[i - j] * j, j * (i - j)));
    }
  }

  return dp[n];
};


console.log(integerBreak(13));