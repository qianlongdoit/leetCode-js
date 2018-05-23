/**
 * Created by Administrator on 2018/5/21.
 */
/**一个N x N的网格(grid) 代表了一块樱桃地，每个格子由以下三种数字的一种来表示：
 *    0 表示这个格子是空的，所以你可以穿过它
 *    1 表示这个格子里装着一个樱桃，你可以摘到樱桃然后穿过它
 *    -1 表示这个格子里有荆棘，挡着你的路
 * 你的任务是在遵守下列规则的情况下，尽可能的摘到最多樱桃：
 *    从位置 (0, 0) 出发，最后到达 (N-1, N-1) ，只能向下或向右走，并且只能穿越有效的格子（即只可以穿过值为0或者1的格子）
 *    当到达 (N-1, N-1) 后，你要继续走，直到返回到 (0, 0) ，只能向上或向左走，并且只能穿越有效的格子
 *    当你经过一个格子且这个格子包含一个樱桃时，你将摘到樱桃并且这个格子会变成空的（值变为0）
 *    如果在 (0, 0) 和 (N-1, N-1) 之间不存在一条可经过的路径，则没有任何一个樱桃能被摘到。
 *
 * 输入: grid =
 * [[0, 1, -1],
 * [1, 0, -1],
 * [1, 1,  1]]
 * 输出: 5
 *
 * 说明：
 * grid 是一个 N * N 的二维数组，N的取值范围是1 <= N <= 50。
 * 每一个 grid[i][j] 都是集合 {-1, 0, 1}其中的一个数。
 * 可以保证起点 grid[0][0] 和终点 grid[N-1][N-1] 的值都不会是 -1。
 */

/**直观思维，dp2次，第一次寻求最优解，然后将摘过的地方修改为0，然后返回时再次寻求修改后的最优解
 * 两次之和即为可以摘到的最多樱桃
 * 但明显感觉不稳妥，没有证明这就是2次之和的最优解
 * 举个反例就可以说明不是最优解。如第一个测试用例所示，开始去最多樱桃的路径，则返回时必然有一个樱桃摘不到
 * 实际上往返所有樱桃都是可以摘到的
 *
 * 问题转化：
 * 问题转为求解有2条路同时从(0,0)出发，走了k步后
 * 第一个人到达(x,k-x),第二个人(y,k-y)时两个人最大收益和
 * dp(k,x,y) = max{dp(k-1,x,y), dp(k-1,x-1,y), dp(k-1,x,y-1), dp(k-1,x-1,y-1)} + gird(i,k-i) + grid(j, k-j)
 * 由于dp(k,x,y)只依赖于dp(k-1,x,y)，与dp(k-2,x,y)、dp(k-3,x,y)...没有关系
 * 所以空间复杂度可以压缩至O(n^2)，用一个二维数组就可以了
 *
 * 参考资料：
 * https://blog.csdn.net/luke2834/article/details/79365645
 * https://blog.csdn.net/u013560925/article/details/80324717
 * https://leetcode.com/problems/cherry-pickup/discuss/109906/annotated-c-dp-solution
 * https://blog.csdn.net/weixin_35816017/article/details/78773991
 *
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  let n = grid.length;
  //  dp保存2条长度为k的路径可以摘取的最多樱桃数量
  //  这两条路分别到达(x,k-x) (y,k-y)
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = -1;
    }
  }

  dp[0][0] = grid[0][0];  //  路径长度为0时

  let maxK = 2 * (n - 1); //  从(0,0)→→(n-1, n-1)的步数
  for (let k = 1; k <= maxK; k++) {

    let maxL = Math.min(k, n - 1);
    //  第一条长度为k的路，最终抵达(i, k - i)
    for (let i = maxL; i >= 0; i--) {
      if (k - i >= n) continue; //  判断越界问题
      //  第二条长度为k的路，最终抵达(j, k - j)
      for (let j = maxL; j >= 0; j--) {
        if (k - j >= n) continue; //  判断越界问题

        if (grid[i][k - i] < 0 || grid[j][k - j] < 0) { //  跳有过刺区域
          dp[i][j] = -1;
          continue;
        }

        if (i > 0) dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
        if (j > 0) dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
        if (i > 0 && j > 0) dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1]);

        //  如果没有路能到达(i, k - i) - (j, k - j)
        if (dp[i][j] === -1) continue;

        //  拾取(i,k-i)及(j,k-j)位置的樱桃，如果 i != j,否则只取其中一个位置的樱桃
        dp[i][j] += grid[i][k - i] + (i === j ? 0 : grid[j][k - j]);

        console.log(dp, '---k---', k, '---i---j---', i, j);

      }
    }
  }

  console.log(dp);
  return Math.max(dp[n - 1][n - 1], 0);
};
let Grid = [
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1]
];

console.log(cherryPickup(Grid));