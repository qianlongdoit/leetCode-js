/**
 * Created by admin on 2018/5/13.
 */
/**给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
 * 请注意，它是排序后的第k小元素，而不是第k个元素。
 *
 * 假设 k 的值永远是有效的, 1 ≤ k ≤ n * n 。
 *
 * matrix = [
 * [ 1,  5,  9],
 * [10, 11, 13],
 * [12, 13, 15]
 * ],
 * k = 8,
 * 返回 13
 */

/**用二分法找到符合条件的数。 但为什么二分就一定可以找到？
 *
 * 因为只有逼近矩阵中的数的时候，getCountLessThan的返回值才会有变化，
 *
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {

  if (matrix.length === 1) return matrix[0][0];

  let len = matrix.length;
  let min = matrix[0][0];
  let max = matrix[len - 1][len - 1];

  while (min <= max) {
    let mid = (max + min) >> 1;// 右移一位，即取平均数
    let count = getCountLessThan(matrix, mid);

    count < k ? min = mid + 1 : max = mid - 1;
    console.log(min, mid, max, count, k)
  }

  return min;
};

/**在题中的矩阵中找到所有比target小的数的数量
 *
 * @param matrix
 * @param target
 * @returns {number}
 */
function getCountLessThan(matrix, target) {
  let count = 0;
  let len = matrix.length;
  let x = len - 1;
  let y = 0;

  while (x >= 0 && y < len) {
    //找到当前列第一个大于target的数的index
    matrix[x][y] > target ? x-- : (count += x + 1, y++);
  }

  return count;
}


let matrix = [
  [1, 5, 9],
  [10, 11, 16],
  [12, 16, 100]
];

// matrix = [[2000000000]]
console.log(kthSmallest(matrix, 9))
// console.log(getCountLessThan(matrix, 14))
