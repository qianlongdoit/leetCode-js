/**
 * Created by admin on 2019/1/5.
 */

/**给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 * 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 * 示例:
 *
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 运行你的函数后，矩阵变为：
 *
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 解释:
 * 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。
 * 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。
 * 如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 */

/**开始想的是，对每个`O`进行dfs搜索，存储与其相邻的`O`的点的集合，
 * 如果其中一个`O`在边界上，则停止搜索，
 * 如果都不在边界上，则把这些点放入res的数组中，
 * res就是符合要求的点的集合，然后再进行修改
 * 但是提交发现无法通过
 * 思考后发现，思路错了，因为递归dfs无法知道终止点在哪里，所以无法收集全`O`在边界上的路径
 *
 * 经过评论提示，与417一样
 * 顿时明白了，关键在于找到不符合的点，剩下的就是符合的点了
 * 即从边界出发进行dfs搜索即可
 *
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let m = board.length;
    if (!m) return;
    let n = board[0].length;


    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O' || board[i][n - 1] === 'O') {
            dfs(board, i, 0, '-');
            dfs(board, i, n - 1, '-');
        }
    }
    for (let i = 0; i < n; i++) {
        if (board[0][i] === 'O' || board[m - 1][i] === 'O') {
            dfs(board, 0, i, '-');
            dfs(board, m - 1, i, '-');
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') board[i][j] = 'X';
            if (board[i][j] === '-') board[i][j] = 'O';
        }
    }

    function dfs(b, x, y, tag) {
        if (x < 0 || y < 0 || x >= m || y >= n || b[x][y] !== 'O') return;
        b[x][y] = tag;
        dfs(b, x - 1, y, tag);
        dfs(b, x + 1, y, tag);
        dfs(b, x, y - 1, tag);
        dfs(b, x, y + 1, tag);
    }

    console.log(board);
};

var board = [
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
];
// board = [
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'X', 'X'],
// ];

solve(board)