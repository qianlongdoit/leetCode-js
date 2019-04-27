/**
 * Created by doit on 2019/4/27.
 */

/**n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击
 *给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 *
 * 示例:
 *
 * 输入: 4
 * 输出: 2
 * 解释: 4 皇后问题存在如下两个不同的解法。
 * [
 * [".Q..",  // 解法 1
 * "...Q",
 * "Q...",
 * "..Q."],
 *
 * ["..Q.",  // 解法 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 */

/**题目同51，没什么好说的
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if (n === 1) return 1;

    //  生成棋盘
    const _buildBord = () => {
        let res = [];
        for (let i = 0; i < n; i++) {
            let arr = Array(n).fill(0);
            res.push(arr);
        }
        return res;
    };
    let board = _buildBord();

    //  对位置[x, y]将不能放置queen的位置全部标记上
    let _fillBoard = (x, y, isRemove = false) => {
        for (let i = 0; i < n; i++) {
            //  竖向
            isRemove ? board[x][i]-- : board[x][i]++;
            //  横向
            isRemove ? board[i][y]-- : board[i][y]++;
        }
        for (let i = 1; i < n; i++) {
            //  向右斜
            if (y + i < n) {
                x - i >= 0 && (isRemove ? board[x - i][y + i]-- : board[x - i][y + i]++);
                x + i < n && (isRemove ? board[x + i][y + i]-- : board[x + i][y + i]++);
            }

            if (y - i >= 0) {
                x - i >= 0 && (isRemove ? board[x - i][y - i]-- : board[x - i][y - i]++);
                x + i < n && (isRemove ? board[x + i][y - i]-- :board[x + i][y - i]++);
            }
        }
        // console.log(JSON.stringify(board));
    };

    let result = [];

    let _search = () => {
        let arrQ = [];
        let x = 0;
        let y = 0;
        //  停止搜索的边界条件
        while (!(x === 0 && y === n)) {
            if (board[x][y] === 0) {
                _fillBoard(x, y);
                arrQ.push([x, y]);
                if (arrQ.length === n) {
                    result.push(arrQ);
                } else {
                    x++;
                    y = 0;
                    continue;
                }
            }

            //  1.当前的y === n，但是没有一个位置可以填充Q。 ->> 需要调整前一行的Q的位置
            //  2.y !== n，但arrQ.length === n。 ->> y++回到情况1
            if (y === n || arrQ.length === n) {
                //  什么时候退出搜索？
                //  当第一排的Q的[x, y]中的x > n的时候
                if (arrQ.length) {
                    [x, y] = arrQ.pop();
                    _fillBoard(x, y, true);
                }
            }
            y >= n ? (x++, y = 0) : y++;
        }
    };
    _search();

    return result.length;
};
