/**
 * Created by admin on 2018/12/15.
 */

/**给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 * 两个相邻元素间的距离为 1 。
 * 输入:
 *  0 0 0
 *  0 1 0
 *  1 1 1
 * 输出:
 *  0 0 0
 *  0 1 0
 *  1 2 1
 * 注意:
 * 给定矩阵的元素个数不超过 10000。
 * 给定矩阵中至少有一个元素是 0。
 * 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 */

/**从0开始扩散，0周围非0元素1全部存起来，已经访问过的标记一下
 * 从上次存的结果中遍历，所有没有访问的地方记为2，然后存起来
 * 如此反复，直到结束
 *
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
    let visited = new Set();
    let current = [];
    let next = [];
    let distance = 0;

    const _update = (x, y, grid) => {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return;
        if (visited.has(`${x},${y}`)) return;

        visited.add(`${x},${y}`);
        grid[x][y] = distance + 1;
        next.push([x, y]);
    };

    matrix.forEach((row, x) => {
        row.forEach((cell, y) => {
            if (matrix[x][y] === 0) {
                visited.add(`${x},${y}`);
                current.push([x, y]);
            }
        })
    });

    while (current.length) {
        current.forEach(point => {
            const [x, y] = point;
            _update(x - 1, y, matrix);
            _update(x, y - 1, matrix);
            _update(x, y + 1, matrix);
            _update(x + 1, y, matrix);
        });

        current = next;
        next = [];
        distance++;
    }

    return matrix;
};

var matrix = [
    [0, 0, 1, 0],
    [0, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
];

updateMatrix(matrix)