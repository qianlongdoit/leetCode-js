/**
 * Created by admin on 2018/6/14.
 */
/**给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 *
 * 示例 1:
 * 输入:
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * 输出: 3
 *
 * 解释:
 * 长度最长的公共子数组是 [3, 2, 1]。
 *
 * 说明:
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 */

/**子数组是连续的！
 * ------------暴力求解-----------
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let len2 = B.length;
  let max = 0;

  for (let i = 0, len1 = A.length; i < len1; i++) {
    let n = 0;
    let j = 0;
    if (len1 - i <= max) break;

    while (j !== len2) {
      if (i + n < len1 && j + n < len2 && A[i + n] === B[j + n]) {
        ++n;
      } else {
        max = Math.max(max, n);
        n = 0;
        ++j;
      }
    }
  }

  console.log(max)
  return max;
};


/**--------动态规划版本----------
 * dp[i][j]表示在A中必须以A[i]结尾和B中必须以B[j]结尾的最长子数组的长度;
 * 初始条件为 i = 0 || j = 0，遍历取值即可
 * 其他情况的时候 if (A[i] === B[j]) dp[i][j] = dp[i][j] + 1
 */
var findLength2 = function (A, B) {
  let max = 0;
  let len1 = A.length;
  let len2 = B.length;
  let dp = [];

  for (let i = 0; i < len1; i++) {
    dp[i] = [];
    for (let j = 0; j < len2; j++) {
      if (i === 0) {
        dp[0][j] = A[0] !==B[j] ? 0 : 1;
        continue;
      }

      if (j === 0) {
        dp[i][0] = A[i] !== B[j] ? 0 : 1;
        continue;
      }

      if (A[i] === B[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        max = Math.max(max, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  console.log(dp)
  console.log(max)
  return max;
};

var A = [1, 2, 3, 2, 1];
var B = [3, 2, 1, 4, 7];

findLength2([0,0,0,0,1], [1,0,0,0,0]);