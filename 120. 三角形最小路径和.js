/**
 * Created by admin on 2018/5/23.
 */
/**给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 例如，给定三角形：
 * [
 *     [2],
 *    [3,4],
 *   [6,5,7],
 *  [4,1,8,3]
 * ]
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 */

/**典型的动态规划问题
 * 从最底层开始向上递推，保留较小的那个值
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let dp = triangle[triangle.length - 1].concat([]);

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0, len = triangle[i].length; j < len; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }

  }

  return dp[0];
};

let triangle = [
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
];

console.log(minimumTotal(triangle))