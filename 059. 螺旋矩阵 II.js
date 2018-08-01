/**
 * Created by admin on 2018/8/1.
 */
/**给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 * 示例:
 * 输入: 3
 * 输出:
 * [
 *  [ 1, 2, 3 ],
 *  [ 8, 9, 4 ],
 *  [ 7, 6, 5 ]
 * ]
 */

/**非常简练的代码
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix.push(new Array(n));
    }

    var count = 1;
    var x = 0, y = 0;
    while (n > 0) {
        if (n === 1) {
            matrix[x][y] = count;
            break;
        }

        for (var i = 0; i < n - 1; i++) {
            matrix[x][y++] = count++;
        }
        for (var i = 0; i < n - 1; i++) {
            matrix[x++][y] = count++;
        }
        for (var i = 0; i < n - 1; i++) {
            matrix[x][y--] = count++;
        }
        for (var i = 0; i < n - 1; i++) {
            matrix[x--][y] = count++;
        }

        x++;
        y++;
        n -= 2;
    }

    return matrix;
};

console.log(generateMatrix(3))