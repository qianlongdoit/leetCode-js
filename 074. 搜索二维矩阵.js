/**
 * Created by Administrator on 2018/5/14.
 */
/**编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 *
 * 输入:
 * matrix = [
 * [1,   3,  5,  7],
 * [10, 11, 16, 20],
 * [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 */

/**实际上m、n的大小对总花费时间没影响，都是log m*n 的复杂度
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  let m = matrix.length;
  let n = matrix[0].length;

  //  先找到所在的行minRow
  let minRow = 0;
  let maxRow = m - 1;
  while (minRow <= maxRow) {
    let midRow = (minRow + maxRow) >> 1;

    matrix[midRow][0] > target ? maxRow = midRow - 1 : minRow = midRow + 1;
  }
  //当判断条件是>时，较大者数值会更逼近于想找的值，返回值为较大者
  console.log(maxRow)
  if (maxRow > m - 1 || maxRow < 0) return false;
  //再找到所在的列
  let min = 0;
  let max = n - 1;
  while (min <= max) {
    let mid = (min + max) >> 1;

    matrix[maxRow][mid] > target ? max = mid - 1 : min = mid + 1;
  }

  console.log(max)
  return matrix[maxRow][max] === target;
};

let matrix = [
  [1, 5, 8, 9],
  [10, 11, 16, 17],
  [18, 19, 100, 101]
];

console.log(searchMatrix(matrix, 0))