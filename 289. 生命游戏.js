/**
 * Created by admin on 2018/8/1.
 */
/**根据百度百科，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在1970年发明的细胞自动机。
 * 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞具有一个初始状态 live（1）即为活细胞，
 * 或 dead（0）即为死细胞。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
 *
 * 1.如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
 * 2.如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
 * 3.如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
 * 4.如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
 *
 * 根据当前状态，写一个函数来计算面板上细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状
 * 态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    var m = board.length;
    var n = board[0].length;

    var livingCounts = [];

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var livingCount = 0;

            if (i > 0 && j > 0 && board[i - 1][j - 1] === 1) livingCount++; //  1
            if (i > 0 && board[i - 1][j] === 1) livingCount++;  //  2
            if (i > 0 && j + 1 < n && board[i - 1][j + 1] === 1) livingCount++;  //  3
            if (j > 0 && board[i][j - 1] === 1) livingCount++;  //  4
            if (j + 1 < n && board[i][j + 1] === 1) livingCount++;  //  6
            if (i + 1 < m && j > 0 && board[i + 1][j - 1] === 1) livingCount++;  //  7
            if (i + 1 < m && board[i + 1][j] === 1) livingCount++;  //  8
            if (i + 1 < m && j + 1 < n && board[i + 1][j + 1] === 1) livingCount++;  //  9

            // console.log(livingCount)
            livingCounts.push(livingCount);
        }
    }

    var i = 0;
    while (i < m * n) {
        var x = ~~(i / n);
        var y = i % n;
        if (livingCounts[i] < 2 || livingCounts[i] > 3) {
            board[x][y] = 0;
        } else if (livingCounts[i] === 3 && board[x][y] === 0) {
            board[x][y] = 1;
        }
        i++;
    }

    console.log(board)
};

var board = [
    [1,1,1],
    [1,1,1],
    [1,1,1],
    [0,1,0]
];

gameOfLife(board)
