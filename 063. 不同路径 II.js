/**
 * Created by admin on 2018/5/20.
 */
/**一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 * 输入:
 * [
 *  [0,0,0],
 *  [0,1,0],
 *  [0,0,0]
 * ]
 * 输出: 2
 */


/**题目和062一样，
 * 如果(i,j)处值为1，则此处到达终点的走法为0
 *
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let dp = [];

  let i = obstacleGrid.length - 1;
  let j = obstacleGrid[0].length - 1;

  while (i >= 0 && j >= 0) {
    if (!dp[i]) {
      dp[i] = [];
    }

    if (obstacleGrid[i][j] === 1) {
      dp[i][j] = 0;
    } else if (i === obstacleGrid.length - 1 && j === obstacleGrid[0].length - 1) {
      dp[i][j] = 1;
    } else {
      if (!dp[i + 1]) {
        dp[i][j] = dp[i][j + 1];
      } else if (!dp[i][j + 1]) {
        dp[i][j] = dp[i + 1][j];
      } else {
        dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
      }
    }

    j === 0 ? (j = obstacleGrid[0].length - 1, i--) : j--;
  }

  return dp[0][0];
};

// let arr = [
//   [0, 1, 0, 0],
//   [0, 1, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ];
let arr = [
  [0, 1, 0, 0],
];

console.log(uniquePathsWithObstacles(arr));