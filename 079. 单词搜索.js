/**
 * Created by admin on 2018/8/5.
 */
/**给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 * 示例:
 * board =
 * [
 *  ['A','B','C','E'],
 *  ['S','F','C','S'],
 *  ['A','D','E','E']
 * ]
 * 给定 word = "ABCCED", 返回 true.
 * 给定 word = "SEE", 返回 true.
 * 给定 word = "ABCB", 返回 false.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var m = board.length;
    var n = board[0].length;
    var used = [];

    for (let i = 0; i < m; i++) {
        used.push(new Array(n));
    }

    var i = 0, j = 0;
    while (i < m && j < n) {
        if (board[i][j] === word[0]) {
            if (searchStr(i, j, board, word)) return true;

        }
        j === n - 1 ? (i++, j = 0) : j++;
    }

    function searchStr(i, j, board, s) {
        var m = board.length;
        var n = board[0].length;
        var x = i, y = j;
        var used = [];

        for (let a = 0; a < m; a++) {
            let temp = [];
            for (let b = 0; b < n; b++) {
                temp.push('')
            }
            used.push(temp)
        }

        var path = [[x, y]];
        used[x][y] = true;

        while (path.length < s.length) {
            var top = x > 0 && !used[x - 1][y] && board[x - 1][y] === s[path.length];
            var right = y + 1 < n && !used[x][y + 1] && board[x][y + 1] === s[path.length];
            var bottom = x + 1 < m && !used[x + 1][y] && board[x + 1][y] === s[path.length];
            var left = y > 0 && !used[x][y - 1] && board[x][y - 1] === s[path.length];

            // console.log(x, y, top, right, bottom, left, `target is ${s[path.length]}`);
            if (top) {
                x--;
                path.push([x, y]);
                used[x][y] = true;
                continue;
            }

            if (right) {
                y++;
                path.push([x, y]);
                used[x][y] = true;
                continue;
            }

            if (bottom) {
                x++;
                path.push([x, y]);
                used[x][y] = true;
                continue;
            }

            if (left) {
                y--;
                path.push([x, y]);
                used[x][y] = true;
                continue;
            }

            // 需要回溯的地方
            // console.log('rollback', path[path.length - 1]);
            var next = rollBack(path, board, used, s);
            if (next) {
                x = next[0];
                y = next[1];
                path.push(next);
                used[x][y] = true;
            } else {
                break;
            }
        }

        // console.log(used, path.length === s.length)
        return path.length === s.length;
    }

    /**从最后个path向回退，一直退到符合条件的值
     * 先判断从哪个方向退回的，再判断回退后应该选哪个点
     * @param path
     * @param board
     * @param used
     * @param s
     * @returns {*}
     */
    function rollBack(path, board, used, s) {
        var m = board.length;
        var n = board[0].length;
        while (path.length > 1) {
            var prev = path.pop();
            var i = path[path.length - 1][0];
            var j = path[path.length - 1][1];
            used[prev[0]][prev[1]] = ''; //将used里面进行还原
            // console.log(prev, '还原')

            //  依次的条件是， 点存在、没有使用过、和目标值相符、该点坐标
            var right = j + 1 < n && !used[i][j + 1] && board[i][j + 1] === s[path.length] && [i, j + 1];
            var bottom = i + 1 < m && !used[i + 1][j] && board[i + 1][j] === s[path.length] && [i + 1, j];
            var left = j > 0 && !used[i][j - 1] && board[i][j - 1] === s[path.length] && [i, j - 1];
            var next = null;

            // console.log(i, j, path.length, right, bottom, left);
            if (i > prev[0] && j === prev[1]) {   //从top退回
                next = right || bottom || left;
            } else if (j < prev[1] && i === prev[0]) { //从right退回
                next = bottom || left;
            } else if (i < prev[0] && j === prev[1]) {  //从bottom退回
                next = left;
            }
            //  从left退回的按此顺序必定要继续向上退回
            if (next) {
                // console.log(`next is ${next}`, next);
                return next;
            }

        }
        //  循环走这里说明不存在
        return false;
    }

    return false;
};

var board = [
    ['A', 'B', 'C', 'B'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

exist(board, 'ECCBF');

// searchStr(2, 2, board, 'ECCBFA');

