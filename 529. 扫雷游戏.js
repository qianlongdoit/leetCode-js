/**
 * Created by admin on 2018/12/8.
 */

/**让我们一起来玩扫雷游戏！
 * 给定一个代表游戏板的二维字符矩阵。
 * 'M' 代表一个未挖出的地雷，
 * 'E' 代表一个未挖出的空方块，
 * 'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块，
 * 数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻，
 * 'X' 则表示一个已挖出的地雷。
 * 现在给出在所有未挖出的方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：
 *
 * 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
 * 如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的方块都应该被递归地揭露。
 * 如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
 * 如果在此次点击中，若无更多方块可被揭露，则返回面板。
 *
 * 注意：
 * 输入矩阵的宽和高的范围为 [1,50]。
 * 点击的位置只能是未被挖出的方块 ('M' 或者 'E')，这也意味着面板至少包含一个可点击的方块。
 * 输入面板不会是游戏结束的状态（即有地雷已被挖出）。
 * 简单起见，未提及的规则在这个问题中可被忽略。例如，当游戏结束时你不需要挖出所有地雷，考虑所有你可能赢得游戏或标记方块的情况
 */

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {

    const aroundExistCells = (click) => {
        let [x, y] = click;
        let findEdge = [];
        if (x - 1 >= 0 && y - 1 >= 0) findEdge.push([x - 1, y - 1]);
        if (x - 1 >= 0 && y >= 0) findEdge.push([x - 1, y]);
        if (x - 1 >= 0 && y + 1 < board[0].length) findEdge.push([x - 1, y + 1]);
        if (x >= 0 && y - 1 >= 0) findEdge.push([x, y - 1]);
        if (x >= 0 && y + 1 < board[0].length) findEdge.push([x, y + 1]);
        if (x + 1 < board.length && y - 1 >= 0) findEdge.push([x + 1, y - 1]);
        if (x + 1 < board.length) findEdge.push([x + 1, y]);
        if (x + 1 < board.length && y + 1 < board[0].length) findEdge.push([x + 1, y + 1]);

        return findEdge;
    };

    const checkMineAround = (click) => {
        let mine = 0;
        let cells = aroundExistCells(click);
        if (cells.length) {
            cells.forEach(cell => {
                const [x, y] = cell;
                board[x][y] === 'M' && mine++;
            });
        }
        return mine;
    };

    let _update = (board, click) => {
        const [x, y] = click;
        const cell = board[x][y];
        if (cell === 'M') {
            board[x][y] = 'X';
            return board;
        }
        if (cell === 'B' || !Number.isNaN(Number(cell))) return board;

        if (cell === 'E') {
            let mine = checkMineAround(click);
            if (!mine) {
                board[x][y] = 'B';
                let nextCells = aroundExistCells(click);

                nextCells.forEach(cell => {
                    _update(board, cell)
                })
            } else {
                board[x][y] = `${mine}`;
                return board;
            }
        }
    }

    _update(board, click);
    return board
};

let board = [
    ["E", "E", "E", "E", "E"],
    ["E", "E", "M", "E", "E"],
    ["E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E"]
];

updateBoard(board, [3, 0]);
console.log(board);