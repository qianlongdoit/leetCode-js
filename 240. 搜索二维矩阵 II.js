/**
 * Created by Administrator on 2018/5/14.
 */
/**编写一个高效的算法来搜索 m x n 矩阵中的一个目标值 target。该矩阵具有以下特性：
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 *
 * 给定以下矩阵 matrix ：
 * [
 *  [1,   4,  7, 11, 15],
 *  [2,   5,  8, 12, 19],
 *  [3,   6,  9, 16, 22],
 *  [10, 13, 14, 17, 24],
 *  [18, 21, 23, 26, 30]
 * ]
 *
 * 输入: matrix, target = 5
 * 输出: true
 *
 * 输入: matrix, target = 20
 * 输出: false
 */

/**根据矩阵特性可得出显而易见的搜索起始点->左下角或右上角
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;

  let i = matrix.length - 1;
  let j = 0;
  let len = matrix[0].length;

  while (i >= 0 && j <= len - 1) {

    if (matrix[i][j] < target) {
      j++
      console.log('>>>>>',i, j)
    } else if (matrix[i][j] > target) {
      i--;
      console.log('^^^^^^^',i, j)
    }
    if (i < 0 || j > len -1) return false;
    if (matrix[i][j] === target) {
      return true;
    }
  }

  console.log('result', i, j)

  return matrix[i][j] === target;
};

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

matrix = [[-1, 3]]

console.log(searchMatrix(matrix, 0))
