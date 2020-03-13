/**
 * Created by doit on 2020/3/12.
 */

/**在给定的网格中，每个单元格可以有以下三个值之一：
 *
 * 值 0 代表空单元格；
 * 值 1 代表新鲜橘子；
 * 值 2 代表腐烂的橘子。
 * 每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。
 *
 * 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。
 *
 * 示例 1
 * 输入：[
 *        [2,1,1],
 *        [1,1,0],
 *        [0,1,1]
 *      ]
 * 输出：4
 *
 * 示例 2：
 * 输入：[
 *        [2,1,1],
 *        [0,1,1],
 *        [1,0,1]
 *      ]
 * 输出：-1
 * 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
 *
 * 示例 3：
 * 输入：[[0,2]]
 * 输出：0
 * 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
 *
 * 提示：
 * 1 <= grid.length <= 10
 * 1 <= grid[0].length <= 10
 * grid[i][j] 仅为 0、1 或 2
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let rotten = [];    //腐烂的
    let isolate = [];   //孤立的
    let fresh = [];     //新鲜的
    let minute = 0;     //耗时

    //先看整体的腐烂的橘子和孤立的橘子
    grid.forEach((row, x) => {
        row.forEach((cell, y) => {
            if (cell === 2) rotten.push([x, y]);
            if (cell === 1) {
                fresh.push([x, y]);
                if (
                    (x < 1 || grid[x - 1][y] === 0)
                    && (x + 1 > grid.length - 1 || grid[x + 1][y] === 0)
                    && (y < 1 || grid[x][y - 1] === 0)
                    && (y + 1 > grid[x].length - 1 || grid[x][y + 1] === 0)
                ) {
                    //有孤立的橘子
                    isolate.push([x, y])
                }
            }
        })
    });

    if (isolate.length || (!rotten.length && fresh.length)) return -1;
    if (!fresh.length) return 0;

    //检查腐烂完需要的时间
    let freshCount = fresh.length;
    while (freshCount) {
        let nextRotten = [];
        rotten.forEach(r => {
            const [x, y] = r;
            if (x >= 1 && grid[x - 1][y] === 1) {
                freshCount--;
                grid[x - 1][y] = 2;
                nextRotten.push([x - 1, y])
            }
            if (x <= grid.length - 2 && grid[x + 1][y] === 1) {
                freshCount--;
                grid[x + 1][y] = 2;
                nextRotten.push([x + 1, y])
            }
            if (y >= 1 && grid[x][y - 1] === 1) {
                freshCount--;
                grid[x][y - 1] = 2;
                nextRotten.push([x, y - 1])
            }
            if (y <= grid[x].length - 2 && grid[x][y + 1] === 1) {
                freshCount--;
                grid[x][y + 1] = 2;
                nextRotten.push([x, y + 1])
            }
        });
        //如果下一步没有腐烂的，在freshCount还有的情况，那么就说明有的永远也无法腐烂
        if (!nextRotten.length) return -1;
        minute++;
        rotten = rotten.concat(nextRotten);
    }

    return minute;
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]));
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]));
// console.log(orangesRotting([[1],[2]]));