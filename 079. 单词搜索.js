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

    var start = []
    var i = 0, j = 0;
    while (i < m && j < n) {
        if (board[i][j] === word[0]) {
            start.push([i, j])
        }
        j === n - 1 ? (i++, j = 0) : j++;
    }

    console.log(start)


    for (let i = 0, len = word.length; i < len; i++) {

    }
};

var board = [
    ['A', 'B', 'C', 'B'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

// exist(board, 'ECCSEE');

getNext(2, 2, board, 'ECCBF');

function getNext(i, j, board, s) {
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

    var index = 0;
    var path = [[x, y]];
    used[x][y] = true;

    while (1) {
        var top = x > 0 && !used[x - 1][y] && board[x - 1][y];
        var right = y + 1 < n && !used[x][y + 1] && board[x][y + 1];
        var bottom = x + 1 < m && !used[x + 1][y] && board[x + 1][y];
        var left = y > 0 && !used[x][y - 1] && board[x][y - 1];

        console.log(x, y, top, right, bottom, left, `target is ${s[index + 1]}`)
        if (top && top === s[index + 1]) {
            x--;
            path.push([x, y]);
            used[x][y] = true;
            index++;
            continue;
        }

        if (right && right === s[index + 1]) {
            y++;
            path.push([x, y + 1]);
            used[x][y] = true;
            index++;
            continue;
        }

        if (bottom && bottom === s[index + 1]) {
            x++;
            path.push([x + 1, y]);
            used[x][y] = true;
            index++;
            continue;
        }

        if (left && left === s[index + 1]) {
            y--;
            path.push([x, y - 1]);
            used[x][y] = true;
            index++;
            continue;
        }

        break;
    }

    console.log(used)
}
