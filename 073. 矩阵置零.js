/**
 * Created by admin on 2018/8/1.
 */
/**给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。
 * 输入:
 * [
 *  [0,1,2,0],
 *  [3,4,5,2],
 *  [1,3,1,5]
 * ]
 * 输出:
 * [
 *  [0,0,0,0],
 *  [0,4,5,0],
 *  [0,3,1,0]
 * ]
 * 进阶:
 * 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 * 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 * 你能想出一个常数空间的解决方案吗？
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    var m = matrix.length;
    var n = matrix[0].length;

    var arrX = [];
    var arrY = [];

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                if (!arrX.length || arrX.indexOf(i) === -1) {
                    arrX.push(i);

                }

                if (!arrY.length || arrY.indexOf(j) === -1) {
                    arrY.push(j);
                }
            }
        }
    }

    //  设置为0
    arrX.forEach(function (v, k) {
        for (var i = 0; i < n; i++) {
            if (matrix[v][i] !== 0) matrix[v][i] = 0;
        }
    });
    arrY.forEach(function (v, k) {
        for (var i = 0; i < m; i++) {
            if (matrix[i][v] !== 0) matrix[i][v] = 0;
        }
    });
    // console.log(arrX, arrY)
    // console.log(matrix)
};


var matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];
setZeroes(matrix);