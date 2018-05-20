/**
 * Created by admin on 2018/5/20.
 */
/**一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？
 *
 * 输入: m = 3, n = 2
 * 输出: 3
 *
 * 输入: m = 7, n = 3
 * 输出: 28
 */

/**递归版本，思路和022一样，递归枚举所有可能性
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths_recursion = function (m, n) {
  let count = 0;


  function getSolution(i, j, process) {
    if (i === m && j === n) {
      count++;
      console.log(process)
    }

    if (i < m) {
      getSolution(i + 1, j, process + '↓')
    }

    if (j < n) {
      getSolution(i, j + 1, process + '→')
    }
  }

  getSolution(1, 1, '');
  return count
};

/**动态规划版本
 * (i,j)位置到达target的走法为 map[i + 1][j] + map[i][j + 1];
 * 终止状态为map[m][n] === 1;
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  var map = [];

  let i = m - 1, j = n - 1;
  while (i >= 0 && j >= 0) {
    if (!map[i]) {
      map[i] = [];
    }

    if (i === m - 1 || j === n - 1) {
      map[i][j] = 1;
    } else {
      map[i][j] = map[i + 1][j] + map[i][j + 1];
    }

    j === 0 ? (j = n - 1, i--) : j--;

  }

  console.log(map)
  return map[0][0]
};


console.log(uniquePaths(6, 6));